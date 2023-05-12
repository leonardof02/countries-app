import "./CountryCardContainer.scss";
import CountryCard from "./CountryCard";
import { Country, Region } from "../helpers/Interfaces";
import { Link } from "react-router-dom";

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
                    <Link to={`/country/${ country.name.common.toLocaleLowerCase().replace(/\s+/g, "%20") }`} key={index}>
                        <CountryCard
                            country={country.name.common}
                            flagUrl={country.flags.svg}
                            capital={country.capital.join(" ")}
                            population={country.population}
                            region={country.region}
                        />
                    </Link>
                ))}
        </div>
    );
}
