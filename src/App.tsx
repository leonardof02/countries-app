import ThemeProvider from "./context/ThemeProvider";
import AppTitle from "./components/AppTitle";
import CountryCardContainer from "./components/CountryCardContainer";
import SearchBar from "./components/SearchBar";
import { ChangeEvent, useState } from "react";
import "./App.scss";
import SelectRegion from "./components/SelectRegion";

import { getAllCountries } from "./helpers/RESTCountriesRequest";

function App() {
    const regions = ["Africa", "America", "Asia", "Europa", "Oceania"];

    const [searchValue, setSearchValue] = useState("");
    const [filterRegion, setFilterRegion] = useState("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
    const handleRegionChange = (newValue: string ) => setFilterRegion( newValue );

    getAllCountries();

    return (
        <ThemeProvider>
            <AppTitle></AppTitle>
            <div className="controls-container">
                <SearchBar value={searchValue} onChange={handleSearchChange} />
                <SelectRegion selectOptions={regions} onChange={handleRegionChange} />
            </div>
            <CountryCardContainer />
        </ThemeProvider>
    );
}

export default App;
