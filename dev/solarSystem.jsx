import React from 'react';

//components
import Header from "./components/Nav.jsx";
import SolarSystem from "./components/solarSystem.jsx";
import OnePicEveryDay from "./components/OnePicEveryDay.jsx";
import PlanetInfo from "./components/planetInfo.jsx";
import Section from "./components/sectionComponent.jsx"
import Footer from "./components/footerComponent.jsx";

class SolarSystemSite extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SolarSystem/>
                <PlanetInfo/>
                <Section/>
                <OnePicEveryDay/>
                <Footer/>
            </div>
        )
    }
}

export default SolarSystemSite