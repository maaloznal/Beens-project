import { useState } from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Search from "../../components/Search";

const Beans = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <div>
      <Header />
      <h1>Beans</h1>
      <Search setFilterValue={setFilterValue} />
      <Cards filterValue={filterValue} />
    </div>
  );
};

export default Beans;
