import "./CountryCardContainer.scss";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import { Country, getAllCountries } from "../helpers/RESTCountriesRequest";

export default function CountryCardContainer() {
    const [countries, setCountries] = useState<null | Country[]>(null);

    useEffect(() => {
        async function getAllCountries() {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
                const countries: Country[] = await response.json();
                setCountries(countries);
            } catch (error) {
                console.log(error);
            }
        }

        getAllCountries();
    }, []);

    return (
        <div className="country-card-container">
            { countries && (countries as Country[]).map((country, index) => (
                <CountryCard
                    key={index}
                    country={country.name.common}
                    flagUrl={country.flags.svg}
                    capital={country.capital[0]}
                    population={country.population}
                    region={country.region}
                />
            ))}
        </div>
    );
}
