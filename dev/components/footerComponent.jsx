import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';


class Footer extends React.Component {

    renderNav = () => {
        return (
            <Nav pullRight bsStyle="pills" activeKey={1}>
                <NavItem eventKey={1} href="#">about me</NavItem>
            </Nav>
        );
    };

    renderLogo = () => {
        return (
            <img src="" />
        );
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        {this.renderLogo()}
                    </div>
                    <div className="col-xs-6">
                        {this.renderNav()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;