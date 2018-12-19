import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as personsActions from '../actions/personsActions'

import {} from '../types/personsTypes'
import {Table } from 'react-materialize'
import './miguelin.css'

class Patterns extends Component{
//I could remove this, so the state doesn't keep updating each time and leave that it keeps the state of the last page but a test or review couldnt have a refresh or something like that x2
componentWillMount() {
	this.props.bringElements();
}

patternSearch =(string, small) => {
	console.log(string,'sup', small)
  if (string.search(small) != -1) {
    return true;
  } else {
	return false;
  }
}

sweeper = () => {
	let temp1, temp2 = '';
	let resp = []
	for(let index = 0 ; index < this.props.list.length; index ++){
		for(let intern = index  ; intern < this.props.list.length; intern ++){
			/*if(index != intern){ This sord of works but there is only one alike and it is an email that is just an@... 
				temp1 = this.props.list[intern].email_address.split('@')
				temp2 = this.props.list[index].email_address
				if(this.patternSearch(temp2, temp1[0])){
					resp.push({"correo 1" : this.props.list[intern].email_address,
						"correo 2 ": this.props.list[index].email_address,
						"alike" : temp1[0]
					})
				}
			}*/
			//This one works the best, there is not a lot of opporunity to test because of the reports in the DB but I think this could work, im just wondering how it would handle more searches.

			if(index != intern){
				temp1 = this.props.list[intern].email_address.match(/.{4}/g)
				temp2 = this.props.list[index].email_address
				for(let element of temp1){
					if(this.patternSearch(temp2, element)){
						resp.push({"correo1" : this.props.list[intern].email_address,
							"correo2": this.props.list[index].email_address,
							"alike" : element
						})
					}
				}
			}
		}		
	}
	return this.displayInfo(resp)
};

displayInfo = (objeto) => (
	<Table className="container table" striped={true} bordered={true}>
		<thead>
			<tr>
			<th className="center">Email 1</th>
			<th className="center">Email 2</th>
			<th className="center">Similar</th>
		
			</tr>
		</thead>

	  	<tbody>
	  		{objeto.map((elem, index) =>(
	  		<tr key={index}>
			  	<td className="center">{elem.correo1}</td>
			  	<td className="center"> {elem.correo2}</td>
			  	<td className="center"> {elem.alike}</td>
			  	
			</tr>
	  	))}
	  	</tbody>
	</Table>	
);


render(){
		return(
			<div className="container">
				{this.sweeper()}
			</div> 
		);
	}

}
const mapStateToProps = ({personsReducers}) =>{
	return personsReducers;
}

export default connect(mapStateToProps, personsActions)(Patterns)