import React, { useEffect } from 'react';
import TopBar from '../../topBar/topBar';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Border from '../../border/border';
import { Link } from 'react-scroll';
import listaProgramow from '../../images/listaprogramow.jpg';
import { Link as Router } from 'react-router-dom';


const Internettvmax = () => {

    // useEffect(() => {
    //     document.title = "Netia - Internet+Telewizja_L"
    // }, []);

    return (
        <>
            <TopBar />
            <Header />
            <section className="offerDetails_internetTvMax">
                <div className="icon_container">
                    <i className="fas fa-wifi"></i> + <i className="fas fa-tv"></i>
                </div>

                <h1 className="offerDetails_internet-text">Internet światłowodowy</h1>
                <p className="offerDetails_internet-text">150 Mb/s z wifi</p>
                <h1 className="offerDetails_internet-text">oraz telewizja L - 183 kanałów</h1>
                <p className="offerDetails_internet-text">80 zł brutto miesięcznie</p>
                <p className="internet_add-text internet_add-text-list184"><Link to="programList_section_ID" smooth={true} duration={1500}>Lista programów</Link></p>



                <div className="offerDetails_internet-add">
                    <p className="internet_add-text internet_add-text-tel">- Abonament przez pierwsze 3 miesiące za 0zł!</p>
                    <p className="internet_add-text">- Jednorazowy koszt instalacji usług to 61zł. </p>
                    {/* <p className="internet_add-text">- Abonament przez pierwszy miesiąc za 0zł.</p> */}
                    <p className="internet_add-text">- Umowa na 24 miesiące.</p>
                    <p className="internet_add-text">- Router wifi oraz dekoder w cenie.</p>
                    <p className="internet_add-text">- Możliwość wybrania dodatkowego dekodera (multiroom) za 10 zł miesięcznie</p>
                    <p className="internet_add-text">- GIGANAGRYWARKA w pakietach M oraz L za 0 zł, w pakiecie S za 5 zł miesięcznie</p>
                    <p className="internet_add-text">- Ceny zawierają rabat 5 zł miesięcznie za zgody marketingowe oraz 5 zł miesięcznie za e-fakturę.</p>
                    <p className="internet_add-text internet_add-text-tel">- Telefon stacjonarny BEZ LIMITU za 10 zł!</p>
                    <p className="internet_add-text internet_add-text-tel">- Telefon komórkowy BEZ LIMITU+2 GB za 20 zł!</p>
                </div>
                <p className="offerDetails_internet-text">Zapytaj o ofertę na 12 miesięcy!</p>
                <Router to="/Kontakt"><button className="toContactSection_button"><span>Zamów</span></button></Router>
                <Border />
                <p className="internet_add-text internet_add-text-options">pozostałe opcje internetu z telewizją:</p>
                <h1 className="offerDetails_internet-text offerDetails_internet-text-other">Internet światłowodowy</h1>
                <p className="offerDetails_internet-text">300 Mb/s z wifi</p>
                <h1 className="offerDetails_internet-text">oraz telewizja L-183 kanały</h1>
                <p className="offerDetails_internet-text">90 zł brutto miesięcznie</p>
                <p className="internet_add-text internet_add-text-list184"><Link to="programList_section_ID" smooth={true} duration={1500}>Lista programów</Link></p>
                <Border />
                <h1 className="offerDetails_internet-text offerDetails_internet-text-other">Internet światłowodowy</h1>
                <p className="offerDetails_internet-text">500 Mb/s z wifi</p>
                <h1 className="offerDetails_internet-text">oraz telewizja L-183 kanały</h1>
                <p className="offerDetails_internet-text">100 zł brutto miesięcznie</p>
                <p className="internet_add-text internet_add-text-list184"><Link to="programList_section_ID" smooth={true} duration={1500}>Lista programów</Link></p>
                <Border />
                <h1 className="offerDetails_internet-text offerDetails_internet-text-other">Internet światłowodowy</h1>
                <p className="offerDetails_internet-text">1000 Mb/s z wifi</p>
                <h1 className="offerDetails_internet-text">oraz telewizja L-183 kanały</h1>
                <p className="offerDetails_internet-text">110 zł brutto miesięcznie</p>
                <p className="internet_add-text internet_add-text-list184"><Link to="programList_section_ID" smooth={true} duration={1500}>Lista programów</Link></p>

                <Border />
                <img src={listaProgramow} id="programList_section_ID" alt="lista_programów"></img>
            </section>
            <Footer />
        </>
    )
}
export default Internettvmax;