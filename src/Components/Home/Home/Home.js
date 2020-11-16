import React from 'react';
import Body from '../Body/Body';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Project from '../Project/Project';
import './Home.css'
const Home = () => {
    return (
        <div style={{backgroundColor:" #615f5e "}}>
            <div className="navmain" >
            <Header></Header>
            <Body></Body>
            </div>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;