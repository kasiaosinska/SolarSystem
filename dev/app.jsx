import React from 'react';
import ReactDOM from 'react-dom';

//components
import SolarSystemSite from "./solarSystem.jsx";


class App extends React.Component {
    render() {
        return (
            <div>
                <SolarSystemSite/>
            </div>
        )
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});