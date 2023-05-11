import { FaArrowLeft } from "react-icons/fa"

import AppTitle from "./AppTitle"
import "./CountryInfoScreen.scss" 


export default function CountryInfoScreen() {
  return <>
    <AppTitle></AppTitle> 
    <div className="country-info-container">
        <div className="navigation">
            <button>
                <FaArrowLeft color='#fff' />
                Back
            </button>
        </div>
        <div className="img-container">
            <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="" />
        </div>
        <h2>Germany</h2>
        <div className="main-info">
            <p><b>NativeName:</b>  </p>
            <p><b>Population:</b>  </p>
            <p><b>Region:</b>  </p>
            <p><b>Sub Region:</b>  </p>
            <p><b>Capital:</b>  </p>
        </div>
        <div className="secondary-info">
            <p><b>Top Level Domain</b>  </p>
            <p><b>Currencies:</b>  </p>
            <p><b>Languages:</b>  </p>
        </div>
        <h3>Border Countries</h3>
        <div className="border-countries-container">
            <button>France</button>
            <button>Germany</button>
            <button>Netherlands</button>
        </div>
    </div>
  </>
  
}
