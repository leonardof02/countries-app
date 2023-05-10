import "./CountryCardContainer.scss";
import CountryCard from "./CountryCard";
import { Country, Region } from "../helpers/RESTCountriesRequest";
import { useEffect, useState } from "react";

interface CountryCardContainerProps {
    countries: Country[] | null;
    filterRegion: Region;
    searchValue: string;
}

export default function CountryCardContainer(props: CountryCardContainerProps) {
    
    const { countries } = props;

    return (
        <div className="country-card-container">
            {countries &&
                (countries as Country[]).map((country, index) => (
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
