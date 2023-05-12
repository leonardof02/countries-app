import { numberToText } from "../helpers/numberToText";
import "./CountryCard.scss"

interface CountryCardProps {
    flagUrl: string;
    country: string;
    population: number;
    region: string;
    capital: string;
}

export default function CountryCard(props: CountryCardProps) {
    const { flagUrl, country, population, region, capital } = props;
    return (
        <div className="country-card">
            <div className="img-container">
                <img src={flagUrl} alt={`${country} Flag`} />
            </div>
            <div className="country-info">
                <h4>{country}</h4>
                <p><b>Population: </b>{ numberToText(population) }</p>
                <p><b>Region: </b>{ region }</p>
                <p><b>Capital: </b>{ capital }</p>
            </div>
        </div>
    );
}
