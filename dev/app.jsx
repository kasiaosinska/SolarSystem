import React from 'react';
import ReactDOM from 'react-dom';
import	{Router, Route,} from 'react-router-dom';

//components
import Home from "./home.jsx";
import SolarSystemSite from "./solarSystem.jsx";


class App extends React.Component {
    render() {
        return (
            <div>
                <Home/>
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