import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import AOS from 'aos';
import Contact from '../Home/Contact/Contact';
const AllContact = () => {
    AOS.init();
    return (
        <div style={{ backgroundColor: " #615f5e " }}>
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default AllContact;