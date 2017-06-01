import React from 'react';
import ReactDOM from 'react-dom';

//components
import Header from "./components/headerComponent.jsx";
import OnePicEveryDay from "./components/OnePicEveryDay.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <OnePicEveryDay/>
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