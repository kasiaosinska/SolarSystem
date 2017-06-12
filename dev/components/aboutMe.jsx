import React from 'react';
import {Row, Col} from 'react-bootstrap';

class AboutMe extends React.Component {
    render () {
        return (
            <div className="container-fluid section-about-me planet-info">
                <div className="container">
                    <Row>
                        <h4 className="dark-blue-section">About Me</h4>
                        <p className="dark-blue-section">
                            I gained experience in finance during last few years but now I decided to try something new.  Lately I finished a Coders Lab course which prepared me to work as Front-End Developer. It took 240 hours and main thematic scope was:
                            HTML, CSS, JavaScript, jQuery, RWD, Sass, ECMAScript 6, ReactJS, Git.
                        </p>
                        <p className="dark-blue-section">
                           I chose this trade because I'm open to challenges and new projects. I was looking for a job that will give me opportunity to learn something new each day.
                        </p>
                    </Row>
                </div>
            </div>
        )
    }
}

export default AboutMe;