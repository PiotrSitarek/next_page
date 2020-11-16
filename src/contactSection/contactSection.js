import React, { useEffect } from 'react';
import TopBar from '../topBar/topBar';
import Header from '../header/header';
import Footer from '../footer/footer';
import Contact from '../contact/contact'

const ContactSection = () => {

    useEffect(() => {
        document.title = "Kontakt"
    }, []);


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