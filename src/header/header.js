import React from 'react';
import logoNetia from '../images/logoNetia.svg';

const Header = () => {

    const burger = () => {
        const burger = document.querySelector(".burgerIcon__lineContainer")
        burger.classList.toggle("is-active");
        const opener = document.querySelector(".mobileMenu__dropdown")

        if (opener.style.height === "100%") {
            opener.style.height = "0%";
        } else {
            opener.style.height = "100%";
        }
    }


    return (
        <section className="mainPage_header">
            {/* <h1 className="header_logo">NETIA_ONLINE</h1> */}
            <img className="logoNetia" src={logoNetia} alt="LOGONetia"></img>
            <nav className="header_navigation">
                <ul className="header_navigation-list">
                    <li className="navigation_list-elements">Zalety</li>
                    <li className="navigation_list-elements">Usługi</li>
                    <li className="navigation_list-elements">Dostępność</li>
                    <li className="navigation_list-elements">Kontakt</li>
                </ul>
            </nav>
            <div className="burgerIcon">
                <div onClick={burger} className="burgerIcon__lineContainer burgerIcon__action">
                    <span className="burgerIcon__line"></span>
                    <span className="burgerIcon__line"></span>
                    <span className="burgerIcon__line"></span>
                </div>
            </div>
            <div className="mobileMenu__dropdown">
                <ul className="mobileDropdown__content">
                    <p className="mobileMenu__link">Test</p>

                </ul>
            </div>
        </section>
    )
}
export default Header;