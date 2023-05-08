import "./CountryCardContainer.scss"
import CountryCard from "./CountryCard"

export default function CountryCardContainer() {
  return (
    <div className="country-card-container">
        <CountryCard
            country="Cuba"
            flagUrl="https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg"
            capital="La Habana"
            population={ 11000000 }
            region="America"
        />
        <CountryCard
            country="Cuba"
            flagUrl="https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg"
            capital="La Habana"
            population={ 11000000 }
            region="America"
        />
        <CountryCard
            country="Cuba"
            flagUrl="https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg"
            capital="La Habana"
            population={ 11000000 }
            region="America"
        />
        <CountryCard
            country="Cuba"
            flagUrl="https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg"
            capital="La Habana"
            population={ 11000000 }
            region="America"
        />
    </div>
  )
}
