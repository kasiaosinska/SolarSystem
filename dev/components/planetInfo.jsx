import React from 'react';

class PlanetInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            link: ''
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default PlanetInfo;