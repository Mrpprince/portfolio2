import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import AOS from 'aos';
const Contact = () => {
    AOS.init();
    function sendEmail  (e) {
        e.preventDefault();

        emailjs.sendForm('service_3bcuwn7', 'template_aj9tr9v', e.target, 'user_1hvYkY91UrR7TQ23EyUtg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    return (
        <div style={{ marginTop: "60px" }}>
            <h1 style={{ textAlign: "center", color: "#fff" }}>CONTACT ME</h1>
            <div className="row " style={{ padding: "60px" }}>

                <div data-aos="zoom-out-right" data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" style={{ color: "#fff" }} className="col-md-4">
                    <p>Khulna,Bangladesh</p>
                    <p>01711120693</p>
                    <p>Email : princemrp13@gmail.com</p>
                </div>
                <div className="col-md-7 " data-aos="zoom-out-left" data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <form onSubmit={sendEmail} >
                        <input className="form-control" name="email" placeholder="Email" type="email" />

                        <br />
                        <input name="company" placeholder="Your name/Company's name" className="form-control" type="text" />
                       
                        <br />
                        <textarea  placeholder="Your Massage" className="form-control" name="message"cols="30" rows="10"></textarea>
                        <br />
                        <input type="submit"  value="Submit" className="btn btn-success" />
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Contact;