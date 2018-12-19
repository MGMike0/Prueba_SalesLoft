import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import List from './List'
import Header from './Header'
import Repetitions from './Repetitions'
import Patterns from './Patterns'
class App extends Component{
render(){
	return(
	 	<div>
	  		<BrowserRouter>
	  		<div>
	    		<Header/>
	          	<Route exact path = '/' component= {List}/>
	          	<Route exact path = '/repetitions' component= {Repetitions}/>
	          	<Route exact path = '/patterns' component= {Patterns}/>
	        </div>
		  	</BrowserRouter>
		</div>
		)
	}
}

export default App;
