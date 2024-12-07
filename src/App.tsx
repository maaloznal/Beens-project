import { createContext, Dispatch, useState } from "react";
import "./App.css";
// import Buttons from "./components/Buttons";
// import Counter from "./components/Counter";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Search from "./components/Search";
// import Title from "./components/Title";

type ThemeContextType = {
  theme: string,
  setTheme: Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  // const [isVisible, setIsVisible] = useState(true);

  const [filterValue, setFilterValue] = useState("");

  
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="container">
        <Header />
        <Search setFilterValue={setFilterValue} />
        <Cards filterValue={filterValue} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
