import { Country } from "../helpers/Interfaces";
import { numberToText } from "../helpers/numberToText";
import BorderCountries from "./BorderCountries";
import "./CountryDetail.scss";

interface CountryDetailProps {
    country: Country;
}

export default function CountryDetail({ country }: CountryDetailProps) {
    const { population, region, subregion, borders, capital, currencies, flags, languages, tld } =
        country;
    const nativeName = country.name.nativeName[Object.keys(country.name.nativeName)[0]].official;

    return (
        <div className="country-detail-container">
            <div className="flag-container">
                <img src={flags.svg} alt={flags.alt} />
            </div>
            <div className="country-detail">
                <h2>{country.name.common}</h2>
                <div className="country-info">
                    <div className="main-info">
                        <p>
                            <b>Native Name:</b> {nativeName}
                        </p>
                        <p>
                            <b>Population:</b> {numberToText(population)}
                        </p>
                        <p>
                            <b>Region:</b> {region}
                        </p>
                        <p>
                            <b>Subregion:</b> {subregion}
                        </p>
                        <p>
                            <b>Capital:</b> {capital.map((capital) => `${capital} `)}
                        </p>
                    </div>
                    <div className="secondary-info">
                        <p>
                            <b>Top Level Domain:</b> {tld.map((tld) => `${tld} `)}
                        </p>
                        <p>
                            <b>Currencies:</b>{" "}
                            {Object.keys(currencies).map(
                                (currency) =>
                                    `${currencies[currency].name} (${currencies[currency].symbol}) `
                            )}
                        </p>
                        <p>
                            <b>Languages:</b>{" "}
                            {Object.keys(languages).map((language) => `${languages[language]} `)}
                        </p>
                    </div>
                </div>
                { borders && <BorderCountries borders={country.borders} />}
            </div>
        </div>
    );
}
