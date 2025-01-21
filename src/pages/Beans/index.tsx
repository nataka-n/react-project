import { useState } from "react";
import Cards from "../../components/Cards";
import Search from "../../components/Search";
import "./style.css";

const Beans = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <>
      <Search setFilterValue={setFilterValue} />
      <h3>Explore All Beanse</h3>
      <Cards filterValue={filterValue} />
    </>
  );
};

export default Beans;
