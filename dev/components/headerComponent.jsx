import React from 'react';
import {Nav, NavItem} from 'react-bootstrap'


class Header extends React.Component {

    render() {
        return (

            <nav className="navbar navbar-default header">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img alt="Brand" src="./logo-xs.png"/>
                        </a>
                    </div>
                    <p className="navbar-text navbar-right"><a href="#" className="navbar-link">About Me</a></p>
                </div>
            </nav>

        )
    }
}

export default Header;