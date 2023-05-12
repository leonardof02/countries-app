import { Country } from "../helpers/Interfaces";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import "./CountryInfoScreen.scss";
import CountryDetail from "./CountryDetail";
import { FaArrowLeft } from "react-icons/fa";

// TODO: Refactor this COMPLETE!!!

interface CountryParams extends Record<string, string> {
    countryName: string;
}

export async function loader({ params }: LoaderFunctionArgs): Promise<Country> {
    const countryName = (params as CountryParams).countryName;
    const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName
            .toLocaleLowerCase()
            .replace(
                /\s+/g,
                "%20"
            )}?fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders`
    );
    const country: Country = await response.json();
    return country;
}

export default function CountryInfoScreen() {
    const countryData = useLoaderData() as Country[];
    const country = countryData[0];

    return (
        <>
            <div className="navigation">
                <Link to="/">
                    <button>
                        <FaArrowLeft />
                        Back
                    </button>
                </Link>
            </div>
            {country && <CountryDetail country={country} />}
        </>
    );
}
