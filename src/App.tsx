import { Outlet } from "react-router-dom";

import ThemeProvider from "./context/ThemeProvider";
import AppTitle from "./components/AppTitle";

function App() {
    return (
        <>
            <ThemeProvider>
                <AppTitle />
                <Outlet />
            </ThemeProvider>
        </>
    );
}

export default App;
