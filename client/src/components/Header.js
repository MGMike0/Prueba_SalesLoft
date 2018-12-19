import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'
import {Link } from 'react-router-dom'
const Header = (props) => (
	<div>
		<Navbar brand='Miguel Moran'left>
		  	<Link to='/' >List</Link>
		 	<Link to='/repetitions'>epetitions</Link>
		  	<Link to='/patterns'>>Patterns</Link>
		</Navbar>
	</div>

);

export default Header;