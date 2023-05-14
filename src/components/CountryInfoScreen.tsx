import { Country } from "../helpers/Interfaces";
import { Link, useLoaderData } from "react-router-dom";

import "./CountryInfoScreen.scss";
import CountryDetail from "./CountryDetail";
import { FaArrowLeft } from "react-icons/fa";

export default function CountryInfoScreen() {

    const countryData = useLoaderData() as Country[];
    
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
            { countryData && <CountryDetail country={countryData[0]} />}
        </>
    );
}
