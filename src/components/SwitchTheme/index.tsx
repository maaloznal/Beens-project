import { useContext } from "react";
import style from "./style.module.css";
import { ThemeContext } from "../../App";

const SwitchTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null; 
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className={style.themeButton}>
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

export default SwitchTheme;
