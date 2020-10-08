import React from 'react';
import TopBar from '../topBar/topBar';
import Header from '../header/header';
import About from '../about/about';
import Range from '../range/range';
import Offer from '../offer/offer';
import Contact from '../contact/contact';
import Border from '../border/border';

const MainPage = () => {

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
        </>
    )
}
export default MainPage;