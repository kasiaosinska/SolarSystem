import React from 'react';


//components
import Nav from './components/nav.jsx';
import Header from './components/headerComponent.jsx'
import Footer from './components/footerComponent.jsx';
import Section from './components/sectionComponent.jsx';
import SectionWithPic from './components/sectionWithPic.jsx';
import AboutMe from './components/aboutMe.jsx'

class Home extends React.Component {
    render () {
        return (
            <div>
                <Header additionalMainClass="nav-home" additionalLinkClass="link-home" />
                <SectionWithPic/>
                <AboutMe/>
                <Section>
                    <div className="pink-opacity"/>
                </Section>
                <Footer/>

            </div>
        )
    }
}

export default Home;