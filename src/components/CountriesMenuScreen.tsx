import { ChangeEvent, useEffect, useState } from "react";

import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar";
import SelectRegion from "./SelectRegion";
import CountryCardContainer from "./CountryCardContainer";

import { Country, Region, getAllCountries } from "../helpers/RESTCountriesRequest";

import "./CountriesMenuScreen.scss";


export default function CountriesMenuScreen() {
    
    const regions: Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const [searchValue, setSearchValue] = useState("");
    const [filterRegion, setFilterRegion] = useState<Region>("");
    const [countries, setCountries] = useState<Country[] | null>(null);

    useEffect(() => {
        async function getAllCountries() {
            try {
                const response = await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
                );
                const countries: Country[] = await response.json();
                setCountries(countries);
            } catch (error) {
                console.log(error);
            }
        }
        getAllCountries();
    }, []);

    function findCountry(countryName: string, findString: string) {
        const name = countryName.toLocaleLowerCase();
        const search = findString.toLocaleLowerCase();
        return name.includes( search );
    }
    
    const filteredCountries =
        (filterRegion === "")
            ? countries
            : (countries as Country[]).filter((country) => {
                  return country.region === filterRegion;
              });

    const filteredCountriesWithSearch =
        (searchValue === "")
            ? filteredCountries
            : (filteredCountries as Country[]).filter( (country) => {
                  return findCountry(country.name.common, searchValue);
              });

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }
    const handleRegionChange = (newValue: Region) => setFilterRegion(newValue);

    getAllCountries();

    
    return <>
        <AppTitle></AppTitle>
        <div className="controls-container">
            <SearchBar value={searchValue} onChange={handleSearchChange} />
            <SelectRegion selectOptions={regions} onChange={handleRegionChange} />
        </div>
        <CountryCardContainer
            countries={filteredCountriesWithSearch}
            filterRegion={filterRegion}
            searchValue={searchValue}
        />
    </>
}
