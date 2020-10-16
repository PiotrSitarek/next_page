import React, { useEffect } from 'react';
import image from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import { Link } from 'react-scroll';


const About = () => {

    const imagesArray = [image, image2, image3]
    let i = 0;
    useEffect(() => {
        document.getElementById("slide_show").src = imagesArray[i]
    })
    function change_image_index() {
        if (i === 0) {
            document.getElementById("slide_show").src = imagesArray[i]
            i++
        } else {
            document.getElementById("slide_show").src = imagesArray[i]
            i = 0
        }
    }
    useEffect(() => {
        const sliderInterval = setInterval(change_image_index, 2500)

        return function cleanup() {
            clearInterval(sliderInterval)
        }
    }, [])

    return (
        <section className="mainPage_about">
            <div className="about_slider" >
                <img id="slide_show" className="about_sliderFoto" alt="slider" />
                <p className="about_slogan">Nowe pakiety</p>
                <p className="about_slogan2">jak rakiety!</p>
                <p className="about_slogan3">Światłowód 300 Mb/s + TV = 60 zł</p>
                <div className="about_buttonsContainer">
                    <Link to="range_section_ID" smooth={true} duration={1500}><button className="about_button"><span>Dostępność</span></button></Link>
                    <Link to="offer_section_ID" smooth={true} duration={1500}><button className="about_button"><span>Oferta</span></button></Link>
                    <Link to="contact_section_ID" smooth={true} duration={1500}><button className="about_button"><span>Kontakt</span></button></Link>
                    {/* <button className="about_button"><span>Oferta</span></button>
                    <button className="about_button"><span>Kontakt</span></button> */}




                </div>
            </div>
        </section>
    )
}
export default About;