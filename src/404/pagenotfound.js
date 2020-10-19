import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section className="section404">
            <p>Nie ma tu strony której szukasz</p>
            <Link to="/" ><button className="contactform__sendButton"><span>Wracamy!</span></button></Link>
        </section>
    )
}
export default PageNotFound;