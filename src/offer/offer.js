import React from 'react';
import { useHistory } from "react-router";

const Offer = () => {
    const history = useHistory();

    const toInternetDetails = () => {
        history.push("/Internet")
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const toInternetTvDetails = () => {
        history.push("/Internet+Telewizja_M");
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const toInternetTvMaxDetails = () => {
        history.push("/Internet+Telewizja_L");
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <section className="mainPage_offer" id="offer_section_ID">
            <div className="offer_container">
                <div className="offer_singleOffer">
                    <h1 className="singleOffer_text">Internet</h1>
                    <p className="singleOffer_text">300 Mb/s z wifi</p>
                    <p className="singleOffer_text">50zł*</p>
                    <button onClick={toInternetDetails} className="offer_button"><span>Szczegóły</span></button>

                </div>
                <div className="offer_singleOffer">
                    <h1 className="singleOffer_text">Internet + telewizja</h1>
                    <p className="singleOffer_text">300 Mb/s z wifi</p>
                    <p className="singleOffer_text">+ 100 programów</p>
                    <p className="singleOffer_text">60zł*</p>
                    <button onClick={toInternetTvDetails} className="offer_button"><span>Szczegóły</span></button>
                </div>
                <div className="offer_singleOffer">
                    <h1 className="singleOffer_text">Internet + telewizja</h1>
                    <p className="singleOffer_text">150 Mb/s z wifi</p>
                    <p className="singleOffer_text">+ 183 programy</p>
                    <p className="singleOffer_text">80zł*</p>
                    <button onClick={toInternetTvMaxDetails} className="offer_button"><span>Szczegóły</span></button>
                </div>


            </div>
            <p className="singleOffer_text singleOffer_text-position">*podane ceny są kwotami brutto</p>

        </section>
    )
}
export default Offer;