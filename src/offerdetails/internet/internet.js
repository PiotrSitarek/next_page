import React from 'react';
import TopBar from '../../topBar/topBar';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Border from '../../border/border';
// import { useHistory } from "react-router";
import { Link } from 'react-router-dom';


const Internet = () => {
    // const history = useHistory();
    // const toContactSection = () => {
    //     history.push("/Kontakt")
    // }


    return (
        <>
            <TopBar id="netbartop" />
            <Header />
            <section className="offerDetails_internet">
                <i className="fas fa-wifi"></i>
                <h1 className="offerDetails_internet-text">Internet światłowodowy</h1>
                <p className="offerDetails_internet-text">300 Mb/s z wifi</p>
                <p className="offerDetails_internet-text">50 zł brutto miesięcznie</p>
                <div className="offerDetails_internet-add">
                    <p className="internet_add-text">- Jednorazowy koszt instalacji usługi to 59zł. </p>
                    <p className="internet_add-text">- Abonament przez pierwsze 3 miesiące za 0zł.</p>
                    <p className="internet_add-text">- Umowa na 24 miesiące.</p>
                    <p className="internet_add-text">- Router wifi w cenie.</p>
                    <p className="internet_add-text">- Ceny zawierają rabat 5 zł miesięcznie za zgody marketingowe oraz 5 zł miesięcznie za e-fakturę.</p>
                    <p className="internet_add-text"></p>
                    <p></p>
                </div>
                {/* <button onClick={toContactSection} className="toContactSection_button"><span>Zamów</span></button> */}
                <Link to="/Kontakt"><button className="toContactSection_button"><span>Zamów</span></button></Link>
                <Border />
                <p className="internet_add-text">pozostałe opcje prędkości internetu:</p>

                <p className="offerDetails_internet-text offerDetails_internet-text-other">500 Mb/s z wifi</p>
                <p className="offerDetails_internet-text">60 zł brutto miesięcznie</p>

                <p className="offerDetails_internet-text offerDetails_internet-text-other">1000 Mb/s z wifi</p>
                <p className="offerDetails_internet-text">70 zł brutto miesięcznie</p>
                <Border />
                <p className="offerDetails_internet-text offerDetails_internet-text-other">Dostępne również umowy na czas 9 miesięcy!</p>



            </section>
            <Footer />
        </>
    )
}
export default Internet;