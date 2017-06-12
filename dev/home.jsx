import React from 'react';
import ReactDOM from 'react-dom';


//components
import Header from './components/Nav.jsx';
import Footer from './components/footerComponent.jsx';


class Home extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Footer/>

            </div>
        )
    }
}

export default Home;