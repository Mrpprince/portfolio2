import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import prince2 from '../../prince2.jpg'
const About = () => {
    return (
        <div  style={{backgroundColor:" #615f5e "}}>
            <Header></Header>
            <div className="container">
            <div className="row">
                <div className="col-md-6" style={{color:"#fff"}}>
                <h2 >Need a full stack developer </h2> <p>So You are in the right way.I will build You responsive website with ReactJS,NodeJS & MongoDB</p>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                <img style={{ height: "300px", width: "300px" ,borderRadius:"10px" }} src={prince2} class="img-fluid" />
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;