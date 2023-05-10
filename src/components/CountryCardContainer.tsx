import "./CountryCardContainer.scss";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import { Country, Region, getAllCountries } from "../helpers/RESTCountriesRequest";

interface CountryCardContainerProps {
    countries: Country[] | null;
    filterRegion: Region;
    searchValue: string;
}

export default function CountryCardContainer(props: CountryCardContainerProps) {
    const { countries, filterRegion, searchValue } = props;

    const filteredCountries =
        filterRegion === ""
            ? countries
            : (countries as Country[]).filter((country) => {
                  return country.region === filterRegion;
              });

    return (
        <div className="country-card-container">
            {countries &&
                (filteredCountries as Country[]).map((country, index) => (
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