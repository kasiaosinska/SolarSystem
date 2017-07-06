import React from 'react';
import {Button, ButtonToolbar} from'react-bootstrap'


class SectionTrees extends React.Component {

    render() {
        return (
            <div className="container-fluid section-trees">
                <div className="purple-opacity">
                    <ButtonToolbar className="button-position">
                        <Button className="button-purple"><p>Each Day Find New Information About Space</p></Button>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

export default SectionTrees;