import { createContext, Dispatch, useState } from "react";
import "./App.css";
// import Buttons from "./components/Buttons";
// import Counter from "./components/Counter";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Search from "./components/Search";
import Example from "./components/Example";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import useDeviceType, { DeviceType } from "./Hooks/useDeviceType";
// import Title from "./components/Title";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  // const [isVisible, setIsVisible] = useState(true);

  const [filterValue, setFilterValue] = useState("");

  const [theme, setTheme] = useState("dark");

  const windowSize = useDeviceType();
  console.log("windowSize", windowSize);

  const status = useOnlineStatus();
  console.log("status", status);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme}`}>
        <Header />
        {windowSize === DeviceType.MOBILE && <h2>MOBILE</h2>}
        {windowSize === DeviceType.TABLET && <h2>TABLET</h2>}
        {windowSize === DeviceType.DESKTOP && <h2>DESKTOP</h2>}
        <Example />
        <Search setFilterValue={setFilterValue} />
        <Cards filterValue={filterValue} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
