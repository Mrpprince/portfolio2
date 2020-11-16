import React from 'react';
import AOS from 'aos';

const Project = () => {
    AOS.init();
    return (
       <div>
            <div className="container" style={{height:"auto",marginTop:"20px",boxShadow:"5px 5px 5px 10px lightgray",background:"#000",padding:"20px",borderRadius:"10px"}} > 
            
            <h1 style={{ textAlign: "center" ,color:"#fff"}}>MY PROJECTS</h1>
            <br/>
            <br/>
            <br/>
            
            <div className="row d-flex justify-content-around ">

                <div className="col-md-4 col-sm-12">
                    <div class="card" data-aos="flip-left"  data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" style={{ width: " 18rem", background:" #96de2f " }}>
                        <div class="card-body">
                            <h5 class="card-title" style={{textAlign:"center",fontWeight:"bold"}}>Creative Agency</h5>

                            <p style={{textAlign:"center",fontWeight:"bold"}} class="card-text"> A full stack firebase auth Build by ReactJs, MongoDB and Node...</p>
                            <a  style={{textAlign:"center"}} href="https://github.com/Mrpprince/creative-agency-client" class="card-link">Github Link</a>
                            <a style={{textAlign:"center"}} href="https://creative-agency-220d6.web.app/" class="card-link">Live Server</a>
                        </div>
                    </div>
                    <br/>
                </div>
                <br/>
                <div className="col-md-4 col-sm-12">
                <div class="card"  data-aos="flip-left"  data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"  style={{ width: " 18rem", background:" #96de2f " }}>
                        <div class="card-body">
                            <h5 class="card-title" style={{textAlign:"center",fontWeight:"bold"}}>Volunteer Network</h5>

                            <p style={{textAlign:"center",fontWeight:"bold"}} class="card-text"> A full stack firebase auth  Project build by ReactJs,NodeJs,MongoDB..</p>
                            <a  style={{textAlign:"center"}} href="#" class="card-link">Github Link</a>
                            <a style={{textAlign:"center"}} href="#" class="card-link">Live Server</a>
                        </div>
                    </div>
                    <br/>
                </div>
               
                <div className="col-md-4 col-sm-12">
                <div  data-aos="flip-left"  data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" class="card" style={{ width: " 18rem", background:" #96de2f " }}>
                        <div class="card-body">
                            <h5 class="card-title" style={{textAlign:"center",fontWeight:"bold"}}>Travel Guru</h5>

                            <p style={{textAlign:"center",fontWeight:"bold"}} class="card-text"> A awesome hotel booking site build by React, firebase auth, Google Map. </p>
                            <a  style={{textAlign:"center"}} href="https://github.com/Mrpprince/travel-guru" class="card-link">Github Link</a>
                            <a style={{textAlign:"center"}} href="https://tender-curran-f65bfd.netlify.app/" class="card-link">Live Server</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
       </div>
    );
};

export default Project;