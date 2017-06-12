import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import NavLink from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
        <Navbar className="navbar">
            <Navbar.Header>
                <Navbar.Brand className="navbar-brand">
                    <a href="#">
                        <img alt="Brand" src="./logo-xs.png"/>
                    </a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight className="navbar-text">
                <NavItem eventKey={1} href="#" className="link">ABOUT ME</NavItem>
                {/*<NavLink avtiveClassName="active" to="/">Home</NavLink>*/}
                {/*<NavLink avtiveClassName="active" to="/SolarSystem">Solar System</NavLink>*/}
            </Nav>
        </Navbar>
        )
    }
}

export default Header;