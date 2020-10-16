import React from 'react';
import { useHistory } from "react-router";

const PageNotFound = () => {
    const history = useHistory();

    const Home = () => {
        history.push("/")
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <section className="section404">
            <p>Nie ma tu strony której szukasz</p>
            <button onClick={Home} className="contactform__sendButton"><span>Wracamy!</span></button>
        </section>
    )
}
export default PageNotFound;