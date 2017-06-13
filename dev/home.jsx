import React from 'react';


//components
import Nav from './components/nav.jsx';
import Header from './components/headerComponent.jsx'
import Footer from './components/footerComponent.jsx';
import SectionTrees from './components/sectionComponent.jsx';
import SectionWithPic from './components/sectionWithPic.jsx';
import AboutMe from './components/aboutMe.jsx';
import Skills from './components/skills.jsx';

class Home extends React.Component {
    render () {
        return (
            <div>
                <Header additionalMainClass="nav-home" additionalLinkClass="link-home" />
                <SectionWithPic/>
                <AboutMe/>
                <SectionTrees additionalOpacityClass="pink-opacity" additionalShowClass="button-pink"
                              buttonText="See All Projects"/>
                <Skills/>
                <Footer/>
            </div>
        )
    }
}

export default Home;