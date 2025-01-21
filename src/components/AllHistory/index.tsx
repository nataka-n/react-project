import { FC } from "react";
import { Link } from "react-router-dom";
import { History } from "../../types/all-type";
import "./style.css";

interface Props {
  data: History;
}

const AllHistory: FC<Props> = ({ data }) => {
  return (
    <Link to={`/all-type/${data.mileStoneId}`} className="allHistory">
      <h4>{data.year}</h4>
      <p>{data.description}</p>
    </Link>
  );
};

export default AllHistory;
