import React from 'react';
import {Image} from 'react-bootstrap';
import { Media, Player, controls } from 'react-media-player';
const { PlayPause, MuteUnmute, } = controls;


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

            console.log(this.state.link);
    }
    showVideo = () => {
        return (
            <Media>
                <div className="media">
                    <div className="media-player">
                        <Player src={this.state.link}/>
                    </div>
                    <div className="media-controls">
                        <PlayPause/>
                        <MuteUnmute/>
                    </div>
                </div>
            </Media>
        )
    };
    render() {
        return (
            <div className="container-fluid nasa" classID="nasa-section">
                <div className="container">
                    <div className="row nasa-item">
                        <h4>{this.state.title}</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="image">
                                {this.state.type === 'image' ?
                                <Image src={this.state.link} responsive /> :
                                this.showVideo()
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="image-description">{this.state.explanation}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OnePicEveryDay;