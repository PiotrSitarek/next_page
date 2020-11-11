import React from 'react';
import { Form, Field } from 'react-final-form';
// import firebase from '../firebase/firebase';
import axios from 'axios';

const Contact = () => {

    const phoneNumberFormula = /^[1-9]{1}[0-9]{8}$/;

    const mustBePhoneNumber = value => (!phoneNumberFormula.test(value) ? 'Wpisz poprawny numer telefonu' : undefined)

    const API_PATH = 'https://netia-zamowienia.pl/index.php';

    return (
        <section className="mainPage_contact">

            <Form onSubmit={fields => {

                const userCheckBox = document.getElementById('userCheck');
                if (userCheckBox.checked === true) {

                    // const time = new Date();
                    // const day = time.toLocaleDateString()
                    // const dayTime = time.toLocaleTimeString()

                    // firebase.firestore().collection('contact-numbers').add({

                    //     "contact-number": `${fields.phoneNumber} ->  ${day} - ${dayTime}`

                    // })

                    axios({
                        method: 'post',
                        url: `${API_PATH}`,
                        headers: { 'content-type': 'application/json' },
                        data: fields.phoneNumber
                    })
                        // .then(result => {
                        //     console.log(result)
                        // })
                        .then(function () {

                            const formElements = document.querySelector(".contactform")
                            formElements.innerHTML = ""
                            const thanks = document.createElement("p")
                            const thanksSecond = document.createElement("p")
                            thanks.classList.add("thanks__style")
                            thanksSecond.classList.add("thanks__style")
                            formElements.appendChild(thanks);
                            formElements.appendChild(thanksSecond);
                            thanks.innerHTML = "Dziękuję za kontakt."
                            thanksSecond.innerHTML = "Oddzwonię najszybciej jak to możliwe."
                        })


                        .catch(function (error) {

                            const formElements = document.querySelector(".contactform")
                            formElements.innerHTML = ""
                            const thanks = document.createElement("p")
                            const errorCall = document.createElement("p")
                            thanks.classList.add("thanks__style")
                            errorCall.classList.add("thanks__style")
                            formElements.appendChild(thanks);
                            formElements.appendChild(errorCall);
                            thanks.innerHTML = "Problem z formularzem, spróbuj później lub zadzwoń do mnie!"
                            errorCall.innerHTML = "693-665-558"
                        });
                }

                else {
                    const firstAlert = document.querySelector(".firstAlert")
                    firstAlert.classList.add("checkBoxAlert");
                }
            }
            }
                render={({ handleSubmit, pristine, invalid }) => (

                    <form onSubmit={handleSubmit} className="contactform" id="contact_section_ID">
                        <h1 className="contact__information">Chcesz poznać szczegóły oferty?</h1>
                        <h2 className="contact__information">Zadzwoń!</h2>
                        <p className="contact__information--salesman contact__information--salesman-name">Piotr Sitarek</p>
                        <p className="contact__information--positioner contact__smalltext">Przedstawiciel handlowy firmy Netia S.A.</p>
                        <a className="contact__information--salesman--number" href="tel:+48693665558">693-665-558</a>
                        <p className="contact__information--positioner contact__smalltext">lub zostaw numer telefonu.</p>
                        <label className="contact__labelpositioner"><p className="contact__smalltext">Oddzwonię!</p>
                            <Field name="phoneNumber" validate={mustBePhoneNumber} >
                                {({ input, meta }) => (
                                    <fieldset className="contactform__positioner" >
                                        <input {...input} type="tel" className="contactform__input" placeholder="+48 ..." />
                                        {meta.error && meta.touched && <span className="contactform__error">{meta.error}</span>}
                                    </fieldset>
                                )}
                            </Field>
                        </label>
                        <div className="checkbox_container">

                            <p className="checkBoxInfo firstAlert">Wyrażam zgodę na przetwarzanie wskazanego przeze mnie w powyższym formularzu numeru telefonu w celu przedstawienia oferty marketingowej dotyczącej usług Netia S.A. </p>
                            <input type="checkbox" id="userCheck" ></input>
                        </div>
                        <button type="submit" className="contactform__sendButton"><span>Wyślij</span></button>
                    </form >
                )}
            />
        </section>
    )
}
export default Contact;