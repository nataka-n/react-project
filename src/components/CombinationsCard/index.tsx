import { useEffect, useState } from "react";
import { Combination } from "../../types/all-type";
import "./style.css";
import AllCombinations from "../AllCombinations";

const CombinationsCard = () => {
  const [updateCombinations, setUpdateCombinations] = useState<
    null | Combination[]
  >(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getCombinations = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const combinationsApi = await fetch(
        " https://jellybellywikiapi.onrender.com/api/combinations?pageIndex=1&pageSize=18"
      );
      console.log(combinationsApi);
      const data = await combinationsApi.json();
      setIsLoading(false);
      setUpdateCombinations(data.items);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getCombinations();
  }, []);

  return (
    <div className="combinationCard">
      {isLoading && <p>...loading</p>}
      {isError && <p>...перезагрузите страницу</p>}
      {updateCombinations &&
        updateCombinations.map((combinations) => (
          <AllCombinations
            data={combinations}
            key={combinations.combinationId}
          />
        ))}
    </div>
  );
};

export default CombinationsCard;
