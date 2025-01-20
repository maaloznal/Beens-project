import { useState, createContext, Dispatch } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState("dark"); 

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme}`}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
