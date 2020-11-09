import React, { useEffect } from 'react';
import logoNetia from '../images/logoNetia.svg';
import { Link } from 'react-scroll';
import { Link as Router } from 'react-router-dom';
// import { useHistory } from "react-router";


const Header = () => {
    // const history = useHistory();

    // const burger = () => {
    //     const burger = document.querySelector(".burgerIcon__lineContainer")
    //     burger.classList.toggle("is-active");
    //     const opener = document.querySelector(".mobileMenu__dropdown")

    //     if (opener.style.height === "100%") {
    //         opener.style.height = "0%";
    //     } else {
    //         opener.style.height = "100%";
    //     }
    // }
    // const toContactSection = ()=>{
    // }
    // const toHomePage = () => {
    //     history.push("/");
    //     window.scroll({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //     });
    // }
    useEffect(() => {
        if (window.location.hash === "#/") {
            const mobilePageNav = document.querySelector(".navigation_list_mobile")
            mobilePageNav.classList.add("mobilePageNav_remove");
        }
    }, [])

    useEffect(() => {
        if (window.location.hash === "#/Internet" || window.location.hash === "#/Internet+Telewizja_M" || window.location.hash === "#/Internet+Telewizja_L" || window.location.hash === "#/Kontakt" || window.location.hash === "#/kontakt") {
            const header_navigation = document.querySelector(".header_navigation")
            header_navigation.classList.add("mobilePageNav_remove");
        }
    }, [])


    return (
        <section className="mainPage_header">
            {/* <h1 className="header_logo">NETIA_ONLINE</h1> */}
            <img className="logoNetia" src={logoNetia} alt="LOGONetia"></img>
            <Router to="/" className="navigation_list_mobile"><button className="about_button"><span>Powrót</span></button></Router>
            <nav className="header_navigation">
                <ul className="header_navigation-list">
                    {/* <li className="navigation_list-elements">Zalety</li> */}
                    {/* <Link to="range_section_ID" smooth={true} duration={1500}> <li className="navigation_list-elements"><Router className="header_none" to="/" href="#">Dostępność</Router></li></Link>
                    <Link to="offer_section_ID" smooth={true} duration={1500}><li className="navigation_list-elements"><Router className="header_none" to="/" href="#">Oferta</Router></li></Link>
                    <Link to="contact_section_ID" smooth={true} duration={1500}><li className="navigation_list-elements"><Router className="header_none" to="/" href="#">Kontakt</Router></li></Link> */}
                    {/* <Router onClick={toHomePage} className="navigation_list_mobile">Strona główna</Router> */}
                    {/* <Link to="range_section_ID" smooth={true} duration={1500}> <li className="navigation_list-elements">Dostępność</li></Link>
                    <Link to="offer_section_ID" smooth={true} duration={1500}><li className="navigation_list-elements">Oferta</li></Link>
                    <Link to="contact_section_ID" smooth={true} duration={1500}><li className="navigation_list-elements">Kontakt</li></Link> */}
                    <Link to="range_section_ID" smooth={true} duration={1500}><button className="about_button"><span>Dostępność</span></button></Link>
                    <Link to="offer_section_ID" smooth={true} duration={1500}><button className="about_button"><span>Oferta</span></button></Link>
                    <Link to="contact_section_ID" smooth={true} duration={1500}><button className="about_button"><span>Kontakt</span></button></Link>

                </ul>

            </nav>
            {/* <div className="burgerIcon">
                <div onClick={burger} className="burgerIcon__lineContainer burgerIcon__action">
                    <span className="burgerIcon__line"></span>
                    <span className="burgerIcon__line"></span>
                    <span className="burgerIcon__line"></span>
                </div>
            </div>
            <div className="mobileMenu__dropdown">
                <ul className="mobileDropdown__content">
                    <p className="mobileMenu__link" onClick={toContactSection}>Kontakt</p>

                </ul>
            </div> */}
        </section>
    )
}
export default Header;