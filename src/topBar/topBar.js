import React, { useEffect } from 'react';

const TopBar = () => {


    useEffect(() => {
        const cookie = sessionStorage.getItem("cookieInfo")
        const cookiesInfo_container = document.querySelector(".cookiesInfo_container")
        if (cookie === "Consent") {
            cookiesInfo_container.style.display = "none";
        } else {
            cookiesInfo_container.style.display = "flex";
        }
    }, [])


    const cookieInfoReaction = () => {
        const cookiesInfo_container = document.querySelector(".cookiesInfo_container")
        cookiesInfo_container.style.display = "none";
        sessionStorage.setItem("cookieInfo", "Consent");
    }


    return (
        <>
            <section className="mainPage_topBar" id="topBar_section_ID">

                <div className="cookiesInfo_container">
                    <i className="fas fa-cookie-bite"></i>
                    <div>
                        <p>Ta strona korzysta z plików cookie aby świadczyć usługi na najwyższym poziomie.</p>
                        <p>Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.</p>
                    </div>
                    <button onClick={cookieInfoReaction} className="cookie__button">Zgoda</button>
                </div>
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

