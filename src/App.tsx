import { useState } from "react";
import "./App.css";
// import Buttons from "./components/Buttons";
// import Counter from "./components/Counter";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Search from "./components/Search";
// import Title from "./components/Title";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const [filterValue, setFilterValue] = useState("");
  console.log("filterValue", filterValue);

  return (
    <div className="container">
      <Header />
      <Search setFilterValue={setFilterValue} />
      <Cards filterValue={filterValue}/>
    </div>
  );
}

export default App;
