import React from 'react';
import {Button, ButtonToolbar} from'react-bootstrap'


class SectionTrees extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <div className="container-fluid section-trees">
                <div className={`purple-opacity ${this.props.additionalOpacityClass}`}>
                    <ButtonToolbar className="button-position">
                        <Button bsSize="large" href="https://github.com/kasiaosinska" target="_blank"
                                className={`hidden-button ${this.props.additionalShowClass}`}>{this.props.buttonText}</Button>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

export default SectionTrees;