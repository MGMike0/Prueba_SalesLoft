import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

const Header = (props) => (
	<div>
		<Navbar brand='Miguel Moran' href='/' left>
		  <NavItem href='/'>List</NavItem>
		  <NavItem href='/repetitions'>Repetitions</NavItem>
		</Navbar>

	</div>

);

export default Header;