import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeProvider";

export default function ThemeSwitcher() {
    const { currentTheme, setTheme } = (useContext(ThemeContext) as ThemeContext);

    const icon = currentTheme === "light" ? <FaMoon color="#fff" /> : <FaSun color="#111" />;
    const themeSwitch = currentTheme === "light" ? "Dark" : "Light";

    function switchTheme() {
        if (currentTheme === "dark")
            setTheme("light");
        else
            setTheme("dark");
    }

    return (
        <button onClick={switchTheme}>
            {icon}
            <span>{`${themeSwitch} Mode`}</span>
        </button>
    );
}
