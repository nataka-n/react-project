import { FC } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../../types/all-type";
import "./style.css";

interface Props {
  data: Recipe;
}

const AllRecipes: FC<Props> = ({ data }) => {
  return (
    <Link to={`/all-type/${data.recipeId}`} className="allRecipes">
      <img src={data.imageUrl} alt="" />
      <div className="desc">
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <p className="make"> Make: {data.makingAmount}</p>
        <p className="cook">Cook Time: {data.cookTime}</p>
        <p className="total">Total Time: {data.totalTime}</p>
      </div>
    </Link>
  );
};

export default AllRecipes;
