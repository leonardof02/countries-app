import ThemeSwitcher from "./ThemeSwitcher";
import "./AppTitle.scss"

export default function AppTitle() {
  return (
    <nav>
        <h1>
            Where in the world?
        </h1>
        <ThemeSwitcher />
    </nav>
  )
}
