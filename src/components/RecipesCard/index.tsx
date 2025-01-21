import { useEffect, useState } from "react";
import { Recipe } from "../../types/all-type";
import AllRecipes from "../AllRecipes";
import "./style.css";

const RecipesCard = () => {
  const [updateRecipes, setUpdateRecipes] = useState<null | Recipe[]>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getRecipes = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const recipesApi = await fetch(
        " https://jellybellywikiapi.onrender.com/api/Recipes?pageIndex=1&pageSize=10"
      );
      console.log(recipesApi);
      const data = await recipesApi.json();
      setIsLoading(false);
      setUpdateRecipes(data.items);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="recipesCard">
      {isLoading && <p>...loading</p>}
      {isError && <p>...перезагрузите страницу</p>}
      {updateRecipes &&
        updateRecipes.map((recipes) => (
          <AllRecipes data={recipes} key={recipes.recipeId} />
        ))}
    </div>
  );
};

export default RecipesCard;
