import CountryCard from "./components/CountryCard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemeProvider from "./context/ThemeProvider";
import "./components/CardContainer.scss"

function App() {
    return (
        
        <ThemeProvider>
            <div className="main-container">
                <div className="card-container">
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
            </div>
        </ThemeProvider>
    );
}

export default App;
