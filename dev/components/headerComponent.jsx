import React from 'react';
import {Navbar} from 'react-bootstrap';


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
            <Navbar.Text pullRight className="navbar-text">
                <a href="#" className="name">Katarzyna Osińska</a>
            </Navbar.Text>
        </Navbar>
        )
    }
}

export default Header;