import React from 'react';
import { Link } from 'react-scroll';



const About = () => {
    return (
        <section className="mainPage_about">
            <div className="about_slider" >
                <p className="about_slogan">Nowe pakiety</p>
                <p className="about_slogan2">jak rakiety!</p>
                <h1 className="about_slogan3">Internet 300 Mb/s + TV = 60 zł</h1>
                <p className="about_slogan4">Black Weeks w Netii! Zapytaj o promocje!</p>
                <div className="about_buttonsContainer">
                    <Link to="range_section_ID" smooth={true} duration={1500}><button className="about_button"><span>Dostępność</span></button></Link>
                    <Link to="offer_section_ID" smooth={true} duration={1500}><button className="about_button"><span>Oferta</span></button></Link>
                    <Link to="contact_section_ID" smooth={true} duration={1500}><button className="about_button"><span>Kontakt</span></button></Link>
                </div>
            </div>
        </section>
    )
}
export default About;