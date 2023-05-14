import { LoaderFunctionArgs } from "react-router-dom";
import { Country } from "../Interfaces";

interface CountryParams extends Record<string, string> {
    countryName: string;
}

export async function countryLoader({ params }: LoaderFunctionArgs) {
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