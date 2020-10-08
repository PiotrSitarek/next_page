import React from 'react';

const Offer = () => {



    return (
        <section className="mainPage_offer">
            <div className="offer_container">
                <div className="offer_singleOffer">
                    <p className="singleOffer_text">Internet</p>
                    <p className="singleOffer_text">300 mb/s z wifi</p>
                    <p className="singleOffer_text">50zł*</p>
                    <button className="offer_button"><span>Szczegóły</span></button>
                </div>
                <div className="offer_singleOffer">
                    <p className="singleOffer_text">Internet + telewizja</p>
                    <p className="singleOffer_text">300 mb/s z wifi</p>
                    <p className="singleOffer_text">+ 101 programów</p>
                    <p className="singleOffer_text">60zł*</p>
                    <button className="offer_button"><span>Szczegóły</span></button>
                </div>
                <div className="offer_singleOffer">
                    <p className="singleOffer_text">Internet + telewizja</p>
                    <p className="singleOffer_text">150 mb/s z wifi</p>
                    <p className="singleOffer_text">+ 184 programów</p>
                    <p className="singleOffer_text">80zł*</p>
                    <button className="offer_button"><span>Szczegóły</span></button>
                </div>


            </div>
            <p className="singleOffer_text">*wszystkie podane ceny są kwotami brutto</p>

        </section>
    )
}
export default Offer;