import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap'


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
                <NavItem eventKey={1}>
                    <a href="#" className="link">ABOUT ME</a>
                </NavItem>
            </Nav>
        </Navbar>
        )
    }
}

export default Header;