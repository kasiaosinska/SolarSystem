import React from 'react';
import { Col, Row} from 'react-bootstrap'


class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
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
            </footer>
        )
    }
}

export default Footer;