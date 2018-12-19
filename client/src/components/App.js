import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import List from './List'
import Header from './Header'
import Repetitions from './Repetitions'

class App extends Component{
render(){
	return(
	 	<div>
	  		<BrowserRouter>
	  		<div>
	    		<Header/>
	          	<Route exact path = '/' component= {List}/>
	          	<Route exact path = '/repetitions' component= {Repetitions}/>
	        </div>
		  	</BrowserRouter>
		</div>
		)
	}
}

export default App;
