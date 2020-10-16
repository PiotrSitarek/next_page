import React from 'react';
import { Form, Field } from 'react-final-form';
import firebase from '../firebase/firebase';

const Contact = () => {

    const phoneNumberFormula = /^[1-9]{1}[0-9]{8}$/;

    const mustBePhoneNumber = value => (!phoneNumberFormula.test(value) ? 'Wpisz poprawny numer telefonu' : undefined)

    return (
        <section className="mainPage_contact">

            <Form onSubmit={fields => {

                const userCheckBox = document.getElementById('userCheck');
                if (userCheckBox.checked === true) {

                    const time = new Date();
                    const day = time.toLocaleDateString()
                    const dayTime = time.toLocaleTimeString()

                    firebase.firestore().collection('contact-numbers').add({

                        "contact-number": `${fields.phoneNumber} ->  ${day} - ${dayTime}`

                    })
                        .then(function () {

                            const formElements = document.querySelector(".contactform")
                            formElements.innerHTML = ""
                            const thanks = document.createElement("p")
                            const thanksSecond = document.createElement("p")
                            thanks.classList.add("thanks__style")
                            thanksSecond.classList.add("thanks__style")
                            formElements.appendChild(thanks);
                            formElements.appendChild(thanksSecond);
                            thanks.innerHTML = "Dziękuje za kontakt."
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
                            thanks.innerHTML = "Problem z formularzem, spróbuj później lub zadzwoń do nas!"
                            errorCall.innerHTML = "697-401-784"
                        });
                }
                else {
                    const firstAlert = document.querySelector(".firstAlert")
                    firstAlert.classList.add("checkBoxAlert");


                }
            }}
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
                                        <input {...input} type="tel" className="contactform__input w3-input w3-animate-input" placeholder="+48 ..." />
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