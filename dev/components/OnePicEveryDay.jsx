import React from 'react';


class OnePicEveryDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            link: '',
            title: '',
            explanation: ''
        }
    }
    componentDidMount() {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=0zicIRIQ2DgmYwUe3vcIGs1yCaHEqjU98gzHBhcn`)
            .then(resp => resp.json())
            .then(body => this.output = {
                typ: body.media_type,
                url: body.url,
                title: body.title,
                description: body.explanation},
            )
            .then(link => this.setState({type: this.output.typ, link: this.output.url,
                title: this.output.title, explanation: this.output.description}));
            console.log(this.state.type);
        console.log(this.state.link)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            {this.state.type === 'image' ? <img src={this.state.link} /> :
                                <video controls><source src={this.state.link}/></video>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            {this.state.title}
                        </div>
                        <div className="row">
                            {this.state.explanation}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OnePicEveryDay;