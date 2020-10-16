import React, { useEffect } from 'react';
import TopBar from '../topBar/topBar';
import Header from '../header/header';
import About from '../about/about';
import Range from '../range/range';
import Offer from '../offer/offer';
import Contact from '../contact/contact';
import Border from '../border/border';
import Footer from '../footer/footer';


const MainPage = () => {

    // useEffect(() => {


    // },)

    // if (keyCode === 13) {
    //     window.event.returnValue = false;
    // }

    return (
        <>

            <TopBar />
            <Header />
            <About />
            <Border />
            <Range />
            <Border />
            <Offer />
            <Border />
            <Contact />
            <Border />
            <Footer />
        </>
    )
}
export default MainPage;