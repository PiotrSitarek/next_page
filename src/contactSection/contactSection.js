import React from 'react';
import TopBar from '../topBar/topBar';
import Header from '../header/header';
import Footer from '../footer/footer';
import Contact from '../contact/contact'

const ContactSection = () => {


    return (
        <section className="contactSection">
            <TopBar />
            <Header />
            <Contact />
            <Footer />

        </section>
    )
}
export default ContactSection;