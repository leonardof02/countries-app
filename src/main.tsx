import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./styles/_global.scss";
import CountryInfoScreen from "./components/CountryInfoScreen.tsx";
import CountriesMenuScreen from "./components/CountriesMenuScreen.tsx";

import { countryLoader } from "./helpers/loaders/countryLoader.ts";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {

                path: "/country/:countryName",
                element: <CountryInfoScreen />,
                loader: countryLoader
            },
            {
                path: "/",
                element: <CountriesMenuScreen />
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
