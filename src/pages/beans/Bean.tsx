import { useState } from "react";
import Cards from "../../components/Cards";
import Search from "../../components/Search";

const Beans = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <div>
      <h1>Beans</h1>
      <Search setFilterValue={setFilterValue} />
      <Cards filterValue={filterValue} />
    </div>
  );
};

export default Beans;
