import { FC } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { Fact } from "../../types/all-type";

interface Props {
  data: Fact;
}

const AllFact: FC<Props> = ({ data }) => {
  return (
    <Link to={`/all-type/${data.factId}`} className={style.allFacts}>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </Link>
  );
};

export default AllFact;
