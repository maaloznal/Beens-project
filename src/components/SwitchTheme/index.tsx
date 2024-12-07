import { useContext } from "react";
import { ThemeContext } from "../../App";

const SwitchTheme = () => {
  const currentTheme = useContext(ThemeContext)
  console.log("currentTheme", currentTheme);
  return <div>theme</div>;
};

export default SwitchTheme;
