import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as personsActions from '../actions/personsActions'

import {Table , Button} from 'react-materialize'
import {} from '../types/personsTypes'

class List extends Component{

componentWillMount() {
	this.props.bringElements();	
}

table = () => (
	<Table>
	  <thead>
		<tr>
		  <th>Name</th>
		  <th>Email</th>
		  <th>Job Tittle</th>
		</tr>
	  </thead>

	  <tbody>
	  	
	  	{this.props.list.map((elem, index) =>(
	  		<tr key={elem.id}>
			  	<td>{elem.name}</td>
			  	<td>{elem.email_address}</td>
			  	<td>{elem.job_title}</td>
			</tr>
	  	))}
	  			
	  	</tbody>
	</Table>	
);

render(){
		return(
			<div className= "container">
			    {this.props.list ? this.table() : ''}
			</div> 
		);
	}

}
const mapStateToProps = ({personsReducers}) =>{
	return personsReducers;
}

export default connect(mapStateToProps, personsActions)(List)