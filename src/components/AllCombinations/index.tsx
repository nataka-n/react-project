import { FC } from "react";
import { Link } from "react-router-dom";
import { Combination } from "../../types/all-type";
import "./style.css";

interface Props {
  data: Combination;
}

const AllCombinations: FC<Props> = ({ data }) => {
  return (
    <Link to={`/all-type/${data.combinationId}`} className="allCombinations">
      <h4>{data.name}</h4>
      <p>{data.tag}</p>
    </Link>
  );
};

export default AllCombinations;
