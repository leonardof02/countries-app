import { useEffect, useState } from "react";
import "./BorderCountries.scss";
import { Country } from "../helpers/Interfaces";
import { Link } from "react-router-dom";

interface BorderCountriesProps {
    borders: string[];
}

export default function BorderCountries({ borders }: BorderCountriesProps) {

    const [ borderCountries, setBorderCountries ] = useState<null | Country[]>(null);

    useEffect(() => {
        async function getBorderCountries() {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${ borders.join(",") }`);
                const borderCountries: Country[] = await response.json();
                setBorderCountries( borderCountries );
            }
            catch( error ) {
                console.log( error );
            }
        }
        getBorderCountries();
    });

    return (
        <div className="border-countries-container">
            { borderCountries && borderCountries.map((country) => (
                <Link to={ `/country/${ country.name.common.toLocaleLowerCase() }` }>
                    <button>{ country.name.common }</button>
                </Link>
            ))}
        </div>
    );
}
