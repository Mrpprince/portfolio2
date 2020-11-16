import React from 'react';
import prince from '../../../prince.jpg';
import AOS from 'aos';
const Header = () => {
    AOS.init();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light container">
                <a class="navbar-brand" href="/home">
                <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src={prince} class="img-fluid"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <a style={{fontWeight:"900"}} data-aos="zoom-in" data-aos-duration="500" class="nav-link text-white" data-aos-easing="ease-in-out" href="/home">Home</a>
                        </li>
                        <li>
                        <a style={{fontWeight:"900"}} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500" class="nav-link text-white" href="/about" >About Me</a>
                        </li>
                        <li class="nav-item">
                            <a style={{fontWeight:"900"}} data-aos="zoom-in" data-aos-duration="500" class="nav-link text-white" data-aos-easing="ease-in-out" href="/project">Projects</a>
                        </li>
                       
                        <li class="nav-item">
                            <a style={{fontWeight:"900"}} data-aos="zoom-in" data-aos-duration="500" class="nav-link text-white" data-aos-easing="ease-in-out" href="/blog" >Blog</a>
                        </li>
                        <li>
                        <a style={{fontWeight:"900"}} data-aos-easing="ease-in-out" data-aos="zoom-in" data-aos-duration="500" class="nav-link text-white" href="/contact" >Contact</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Header;