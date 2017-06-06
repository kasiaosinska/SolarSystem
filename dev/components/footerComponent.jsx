import React from 'react';
import {Nav, NavItem, Col, Row} from 'react-bootstrap'


class Footer extends React.Component {

    render() {
        return (

            <nav className="navbar navbar-default header">
                <div className="container">
                    <Row className="icons">
                        <Col className="col-md-4">
                            <img alt="Brand" src="./earth.png"/>
                        </Col>
                        <Col className="col-md-4">
                            <img className="rocket" alt="Brand" src="./rocket1.png" />
                        </Col>
                        <Col className="col-md-4">
                            <img alt="Brand" src="./planet.png"/>
                        </Col>
                    </Row>
                </div>
            </nav>

        )
    }
}

export default Footer;