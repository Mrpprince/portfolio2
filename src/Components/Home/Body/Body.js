import React from 'react';
import prince2 from '../../../prince2.jpg';
import AOS from 'aos';
import './Body.css'
const Body = () => {
    AOS.init();
    return (
        <div style={{ marginBottom: "30px" }} className="mt-3 container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-sm-12">
                    <h1 data-aos="zoom-in-right" data-aos-duration="1000"
                        data-aos-easing="ease-in-out" style={{ color: "#fff" }}>I am <span style={{ color: "#de4e2f", fontWeight: "bold" }}>Mostafizur Rahman  Prince </span>

                    </h1>
                    <p style={{ fontSize: "30px", fontFamily: "italic", color: "#fff", fontWeight: "bold" }}>Need a Full Stack Developer <span data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="zoom-in" >?</span> </p>
                    <p data-aos="zoom-in-right" data-aos-duration="1000"
                        data-aos-easing="ease-in-out" style={{ color: "white", fontWeight: "700" }}> Hello! My name is Mostafizur Rahman Prince & I’m a full stack web developer.
                        If you're looking for a top-quality website which will increase leads, make life easier and highlight your brand identity, you have come to the right place!</p>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3 col-sm-12">
                    <img data-aos="zoom-in-left" data-aos-duration="1000"
                        data-aos-easing="ease-in-out" style={{ height: "300px", width: "300px",borderRadius:"10px" }} src={prince2} class="img-fluid img" />
                </div>
            </div>

        </div>
    );
};

export default Body;