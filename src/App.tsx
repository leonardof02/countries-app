import CountriesMenuScreen from "./components/CountriesMenuScreen";
import CountryInfoScreen from "./components/CountryInfoScreen";
import ThemeProvider from "./context/ThemeProvider";

function App() {
    
    return (
        <ThemeProvider>
            {/* <CountriesMenuScreen></CountriesMenuScreen> */}
            <CountryInfoScreen></CountryInfoScreen>
        </ThemeProvider>
    );
}

export default App;
