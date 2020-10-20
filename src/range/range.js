import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { Form, Field } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';
import netpet from '../images/netpet.jpg';
import { uniqBy } from "lodash";

const Range = () => {

    const rotate = () => {
        const rangePetCatcher = document.querySelector(".range_pet");
        rangePetCatcher.classList.add("petRotate")
    }
    const history = useHistory();
    const [allDataBase, setAllDataBase] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [streetList, setStreetList] = useState([]);

    // useEffect(() => {

    //     fetch(`http://localhost:3000/database`)
    //         .then((response) => response.json())
    //         .then((response) => setAllDataBase(response))

    // }, []);

    // useEffect(() => {
    //     // fetch(`https://piotrsitarek.pl/database.json`)
    //     fetch(`https://sitar05.vot.pl/database.json`)
    //         .then((response) => response.json())    //        
    //         .then((response) => setAllDataBase(response.database))
    // }, []);

    useEffect(() => {

        fetch(`https://netia-zamowienia.pl/database.json`)
            .then((response) => response.json())
            .then((response) => setAllDataBase(response.database))
    }, []);



    const uniqueCities = uniqBy(allDataBase, 'CITY_NAME')
    const uniqueStreets = uniqBy(allDataBase, 'STREET_NAME')

    useEffect(() => {
        setCityList(uniqueCities)
        setStreetList(uniqueStreets)
    }, [allDataBase]);

    const [citySuggestions, setCitySuggestions] = useState([]);
    const [cityText, setCityText] = useState('');

    const onChangeCity = (value) => {
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            const cityListToSuggest = cityList.map(function (element) {
                return element.CITY_NAME
            })
            suggestions = cityListToSuggest.filter((element) => {
                return regex.test(element)
            })
        } setCitySuggestions(suggestions); setCityText(value)
    };

    const citySuggestionSelect = (value) => {
        setCityText(value);
        setCitySuggestions([])
    }

    const renderCitySuggestions = () => {
        if (citySuggestions.length === 0) {
            return null
        }
        return (
            <ul className="suggestionsList">
                {citySuggestions.slice(0, 3).map((element) => <li className="suggestionListElement" key={element} onClick={() => citySuggestionSelect(element)}>{element}</li>)}
            </ul>
        )
    }
    const [streetSuggestions, setStreetSuggestions] = useState([]);
    const [streetText, setStreetText] = useState('');

    const onChangeStreet = (value) => {
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            const streetListToSuggest = streetList.map(function (element) {
                return element.STREET_NAME
            })
            suggestions = streetListToSuggest.filter((element) => {
                return regex.test(element)
            })
        } setStreetSuggestions(suggestions); setStreetText(value)
    };

    const streetSuggestionSelect = (value) => {
        setStreetText(value);
        setStreetSuggestions([])
    }

    const renderStreetSuggestions = () => {
        if (streetSuggestions.length === 0) {
            return null
        }
        return (
            <ul className="suggestionsList">
                {streetSuggestions.slice(0, 3).map((element) => <li className="suggestionListElement" key={element} onClick={() => streetSuggestionSelect(element)}>{element}</li>)}
            </ul>
        )
    }

    const buildingNumberFormula = /[0-9]+[abc]*/;
    const required = value => (value ? undefined : 'Uzupełnij powyższe pole...')
    const buildingNumberValidator = value => (buildingNumberFormula.test(value) ? undefined : 'Uzupełnij powyższe pole...')

    useEffect(() => { // czyszczenie sugestii przy znaznaczeniu drugiego inputa
        const city = document.querySelector(".cityNameInput");
        city.addEventListener("click", function () {
            setStreetSuggestions([]);
        })
        const street = document.querySelector(".streetNameInput");
        street.addEventListener("click", function () {
            setCitySuggestions([]);
        })
    }, [])


    return (

        <Form onSubmit={fields => {
            rotate();

            const myAddress = allDataBase.filter((element) => {

                const correctBuildingNumber = fields.buildingNumber.toUpperCase();

                return (cityText === element.CITY_NAME && streetText === element.STREET_NAME && correctBuildingNumber === element.BUILDING_NUMBER)
            })

            if (myAddress.length > 0) {
                const addressCheck = document.querySelector(".localizationBoxContainer");
                addressCheck.innerHTML = "";
                const thanks = document.createElement("p");
                const success = document.createElement("p");
                const smile = document.createElement("i");

                const checkButtonsContainer = document.createElement("div");

                const toOfferButton = document.createElement("button");
                const toContactButton = document.createElement("button");

                thanks.classList.add("successInfo");
                success.classList.add("successInfo");
                smile.classList.add("far")
                smile.classList.add("fa-smile")

                checkButtonsContainer.classList.add("range_checkButtonsContainer");

                toOfferButton.classList.add("about_button");
                toContactButton.classList.add("about_button2");
                toOfferButton.classList.add("spanCatcher");
                toContactButton.classList.add("spanCatcher2");

                addressCheck.appendChild(smile);
                addressCheck.appendChild(thanks);
                addressCheck.appendChild(success);
                thanks.innerHTML = "Tak!";
                success.innerHTML = "Skorzystaj z naszych usług w swoim mieszkaniu!";

                addressCheck.appendChild(checkButtonsContainer);
                const range_checkButtonsContainer = document.querySelector(".range_checkButtonsContainer");


                range_checkButtonsContainer.appendChild(toContactButton);
                const span2button = document.querySelector(".spanCatcher2");
                const span2 = document.createElement("span");
                span2button.appendChild(span2);
                span2.innerHTML = "Kontakt";

                const offerButton = document.querySelector(".about_button");
                offerButton.addEventListener("click", function () {
                    history.push("/Oferty")

                });

                const contactButton = document.querySelector(".about_button2");
                contactButton.addEventListener("click", function () {
                    history.push("/Kontakt")

                });



            } else {

                const addressCheck = document.querySelector(".localizationBoxContainer")
                addressCheck.innerHTML = ""
                const thanks = document.createElement("p")
                thanks.classList.add("errorInfo")
                const sad = document.createElement("i");
                sad.classList.add("far");
                sad.classList.add("fa-frown");
                addressCheck.appendChild(sad);
                addressCheck.appendChild(thanks);
                thanks.innerHTML = 'Niestety, pod Twoim adresem nie posiadamy usług stacjonarnych.'

            }
        }}
            render={({ handleSubmit, pristine, invalid }) => (
                <section className="addressCheck container" id="range_section_ID">
                    <form onSubmit={handleSubmit} className="localizationBoxContainer row ">


                        <label className="addressCheck__label">
                            <h1 className="searchInfo">Usługi Netii w Twoim domu?</h1>
                            <h1 className="searchInfo">Sprawdź czy to możliwe!</h1>
                            <Field name="cityName" validate={required}>
                                {({ input, meta }) => (
                                    <div className="suggestionsPositioner" >
                                        <input {...input} type="text" className="formInputs cityNameInput w3-input w3-animate-input" value={cityText} placeholder="Miasto..." />
                                        {meta.error && meta.touched && <span className="addresscheck__error">{meta.error}</span>}
                                        {renderCitySuggestions()}
                                    </div>
                                )}
                            </Field>
                            <OnChange name="cityName">{(value, previous) => { onChangeCity(value) }}</OnChange>
                            <Field name="streetName" validate={required}>
                                {({ input, meta }) => (
                                    <div className="suggestionsPositioner">
                                        <input {...input} type="text" className="formInputs streetNameInput w3-input w3-animate-input" value={streetText} placeholder="Ulica..." />
                                        {meta.error && meta.touched && <span className="addresscheck__error">{meta.error}</span>}
                                        {renderStreetSuggestions()}
                                    </div>
                                )}
                            </Field>
                            <OnChange name="streetName">{(value, previous) => { onChangeStreet(value) }}</OnChange>
                            <Field name="buildingNumber" validate={buildingNumberValidator}>
                                {({ input, meta }) => (
                                    <div className="suggestionsPositioner">
                                        <input {...input} type="text" className="formInputs w3-input w3-animate-input" placeholder="Numer budynku..." />
                                        {meta.error && meta.touched && <span className="addresscheck__error">{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </label>
                        <button type="submit" className="about_button"><span>Sprawdź</span></button>
                    </form>
                    <div className="range_petContainer">
                        <img className="range_pet" src={netpet} alt="NetiaPet"></img>
                    </div>
                </section>
            )}
        />
    );

}
export default Range;