import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeProvider";

// .dark-theme {
//     $element-background: hsl(209, 23%, 22%);
//     $app-background: hsl(207, 26%, 17%);
//     $text-color: hsl(0, 0%, 100%);
//     $shadow-color: hsl(200, 15%, 8%);
// }

// .light-theme {
//     $element-background: hsl(0, 0%, 95%);
//     $app-background: hsl(0, 0%, 98%);
//     $text-color: hsl(200, 15%, 8%);
//     $shadow-color: hsl(200, 15%, 8%);
// }

export default function ThemeSwitcher() {
    const { currentTheme, setTheme } = ( useContext(ThemeContext) as ThemeContext );
    const icon = currentTheme === "dark" ? <FaMoon /> : <FaSun />;
    const themeSwitch = currentTheme === "dark" ? "Dark" : "Light";

    function switchTheme() {
        const root = document.documentElement;
        if (currentTheme === "dark") {
            root.style.setProperty("--element-background", "hsl(0, 0%, 90%)" );
            root.style.setProperty("--app-background", "hsl(0, 0%, 95%)" );
            root.style.setProperty("--text-color", "hsl(200, 15%, 25%)" );
            root.style.setProperty("--shadow-color", "hsla(240, 1%, 19%, 0.195)" );
            setTheme("light");
        }
        else {
            root.style.setProperty("--element-background", "hsl(209, 23%, 22%)" );
            root.style.setProperty("--app-background", "hsl(207, 26%, 17%)" );
            root.style.setProperty("--text-color", "hsl(0, 0%, 100%)" );
            root.style.setProperty("--shadow-color", "hsla(240, 1%, 19%, 0.195)" );
            setTheme("dark");
        }
    }

    return (
        <button onClick={switchTheme}>
            {icon}
            <span>{`${themeSwitch} Mode`}</span>
        </button>
    );
}
