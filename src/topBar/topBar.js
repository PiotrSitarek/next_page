import React from 'react';

const TopBar = () => {

    return (
        <>
            <section className="mainPage_topBar">
                <div className="topBar_mailContainer">
                    <i className="far fa-envelope mainPage_topBar_icon mainPage_topBar_icon_envelope "></i>
                    <a className="mainPage_topBar_text mainPage_topBar_mail" href="mailto:contact@example.com">piotr.sitarek@przedstawiciel.netia.pl</a>
                </div>
                <div className="topBar_phoneContainer">
                    <i className="fas fa-phone mainPage_topBar_icon mainPage_topBar_icon_phone"></i>
                    <a className="mainPage_topBar_text mainPage_topBar_text-number" href="tel:+48693665558"> 693 665 558</a>
                </div>
            </section>
        </>
    )
}
export default TopBar;

