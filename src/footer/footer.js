import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {

    return (
        <section className="mainPage_footer">
            <div className="law_container">
                <a className="law_links" href="https://netia-zamowienia.pl/polityka_prywatnosci.pdf" target="_blank" rel="noopener noreferrer">Polityka Prywatności</a>
                <a className="law_links" href="http://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/" target="_blank" rel="noopener noreferrer">Jak wyłączyć cookies?</a>
                <a className="law_links" href="https://jakwylaczyccookie.pl/jak-bezpiecznie-korzystac-z-cookies/" target="_blank" rel="noopener noreferrer">Bezpieczeństwo w sieci</a>
            </div>
            <Link to="topBar_section_ID" smooth={true} duration={1500}><i className="fas fa-arrow-circle-up"></i></Link>

        </section>
    )
}
export default Footer;