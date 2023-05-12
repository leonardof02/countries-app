import { useEffect, useState } from "react";
import "./BorderCountries.scss";
import { Country } from "../helpers/Interfaces";
import { Link } from "react-router-dom";

interface BorderCountriesProps {
    borders: string[];
}

export default function BorderCountries({ borders }: BorderCountriesProps) {
    const [borderCountries, setBorderCountries] = useState<Country[]>([]);

    useEffect(() => {
        async function getBorderCountries() {
            try {
                let response;
                if (borders.length !== 0) {
                    response = await fetch(
                        `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
                    );
                    const borderCountries: Country[] = await response.json();
                    setBorderCountries(borderCountries);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getBorderCountries();
    }, [borders]);

    console.log( borderCountries );

    return (
        <>
            <h3>Border Countries</h3>
            <div className="border-countries-container">
                { (borderCountries) && 
                    borderCountries.map((country, index) => (
                        <Link
                            to={`/country/${country.name.common
                                .toLocaleLowerCase()
                                .replace(/\s+/g, "%20")}`}
                            key={index}
                        >
                            <button>{country.name.common}</button>
                        </Link>
                    ))}
                { (borderCountries.length === 0) && <p>No frontiers</p>}
            </div>
        </>
        )
}
