import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as personsActions from '../actions/personsActions'

import {Table} from 'react-materialize'

import {} from '../types/personsTypes'

import './miguelin.css'

class Repetitions extends Component{
//I could remove this, so the state doesn't keep updating each time and leave that it keeps the state of the last page but a test or review couldnt have a refresh or something like that 
componentWillMount() {
	this.props.bringElements();
	
}
tops = () => {
	let todo = []
	let temp = '';
//First he get all the email address
	this.props.list.map((elem, index) =>{
		temp = elem.email_address.split('')
  		todo = todo.concat(temp);
  	})
	todo = todo.join('')
//We make all the emails just one big string (idk if this could work with bigger quantity i dont think so)
	let superSet = new Set(todo);
	let iterator = superSet.values();
/*We make it an Set so there are no repetitions*/

	let otra = this.objectificador(iterator, todo, superSet.size)
//In this function we count the repetition of characters of the set in the big string 
	otra = this.bubbleSort(otra,superSet.size)
	
	return this.displayTable(Object.values(otra))
};
//Name is just a silly joke objetificador la creadora de objetos.
objectificador = (set, todo, size) => {
	let uno= 1
	let temp = ''
	let final= {}
	//We split the string for every time the character repeats and substract one and thats the number we need
	for(let i = 0; size > i ; i++){
		uno = set.next().value
		temp = todo.split(uno).length -1;
		final[i] = {"letra": uno, "cant":temp}
	}
	return final
};

/*This one is in honor of David Colin for spending almost half an hour debugging a bubble sort just because he put variable names like a,b,x,z */
bubbleSort = (obj, size) =>{
	 		
	for(let primera = 0; primera< size; primera++){
		for(let segunda = 0; segunda< (size-primera-1); segunda++){
			if(obj[segunda].cant < obj[segunda+1].cant) {
            //Swap the numbers
            let tmp = obj[segunda];  
            obj[segunda] = obj[segunda+1];
            obj[segunda+1] = tmp; 
			}
		}
	};
return obj
}


displayTable = (objeto) => (
	<Table className="container table" striped={true} bordered={true}>
		<thead>
			<tr>
			<th className="center">Character</th>
			<th className="center">Repetitions</th>
		
			</tr>
		</thead>

	  	<tbody>
	  		{objeto.map((elem, index) =>(
	  		<tr key={index}>
			  	<td className="center">{elem.letra}</td>
			  	<td className="center"> {elem.cant}</td>
			  	
			</tr>
	  	))}
	  	</tbody>
	</Table>	
);

render(){
		return(
			<div className="container">
				{this.tops()}
			</div> 
		);
	}

}
const mapStateToProps = ({personsReducers}) =>{
	return personsReducers;
}

export default connect(mapStateToProps, personsActions)(Repetitions)