import ThemeProvider from "./context/ThemeProvider";
import AppTitle from "./components/AppTitle";
import CountryCardContainer from "./components/CountryCardContainer";
import SearchBar from "./components/SearchBar";
import { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import SelectRegion from "./components/SelectRegion";

import { Country, Region, getAllCountries } from "./helpers/RESTCountriesRequest";

function App() {
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

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
    const handleRegionChange = (newValue: Region) => setFilterRegion(newValue);

    getAllCountries();

    return (
        <ThemeProvider>
            <AppTitle></AppTitle>
            <div className="controls-container">
                <SearchBar value={searchValue} onChange={handleSearchChange} />
                <SelectRegion selectOptions={regions} onChange={handleRegionChange} />
            </div>
            <CountryCardContainer
                countries={countries}
                filterRegion={filterRegion}
                searchValue={searchValue}
            />
        </ThemeProvider>
    );
}

export default App;
