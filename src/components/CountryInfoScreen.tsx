import { FaArrowLeft } from "react-icons/fa";

import "./CountryInfoScreen.scss";
import { Country, Languages } from "../helpers/Interfaces";
import { numberToText } from "../helpers/numberToText";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import BorderCountries from "./BorderCountries";

export async function loader({ params }: LoaderFunctionArgs) {
    const countryName = params.countryName;
    const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders`
    );
    const country: Country = await response.json();
    return country;
}

export default function CountryInfoScreen() {
    const countryData = useLoaderData() as Country[];
    const country = countryData[0];

    return (
        country && (
            <>
                <div className="country-info-container">
                    <div className="navigation">
                        <Link to="/" >
                            <button>
                                <FaArrowLeft color="#fff" />
                                Back
                            </button>
                        </Link>
                    </div>
                    <div className="img-container">
                        <img src={country.flags.svg} alt={`${country.flags.alt}`} />
                    </div>
                    <h2>{country.name.common}</h2>
                    <div className="main-info">
                        <p>
                            <b>NativeName:</b>
                            {
                                country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                                    .common
                            }
                        </p>
                        <p>
                            <b>Population:</b>
                            {numberToText(country.population)}
                        </p>
                        <p>
                            <b>Region:</b>
                            {country.region}
                        </p>
                        <p>
                            <b>Sub Region:</b>
                            {country.subregion}
                        </p>
                        <p>
                            <b>Capital:</b>
                            {country.capital[0]}
                        </p>
                    </div>
                    <div className="secondary-info">
                        <p>
                            <b>Top Level Domain</b>
                            {country.tld[0]}
                        </p>
                        <p>
                            <b>Currencies:</b>
                            {Object.keys(country.currencies).map((currency) => {
                                return `${country.currencies[currency].name} (${country.currencies[currency].symbol}) `;
                            })}
                        </p>
                        <p>
                            <b>Languages:</b>
                            {Object.keys(country.languages as Languages).map((language) => {
                                return `${country.languages[language]} `;
                            })}
                        </p>
                    </div>
                    <h3>Border Countries</h3>
                    <BorderCountries borders={ country.borders }/>
                </div>
            </>
        )
    );
}
