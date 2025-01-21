import { useEffect, useState } from "react";
import { Fact } from "../../types/all-type";
import AllFact from "../AllFacts";
import "./style.css";



const FactCard = () => {
  const [updateFact, setUpdateFact] = useState<null | Fact[]>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);



  const getFacts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const factApi = await fetch(
        " https://jellybellywikiapi.onrender.com/api/Facts?pageIndex=1&pageSize=150"
      );
      console.log(factApi);
      const data = await factApi.json();
      setIsLoading(false);
      setUpdateFact(data.items);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <div className="factCard">
      {isLoading && <p>...loading</p>}
      {isError && <p>...перезагрузите страницу</p>}
        <img
          src="src\images\happy-bean.png"
          alt="happy-bean"
          className="happy-bean"
        />
      {updateFact && updateFact.map((fact) => <AllFact data={fact} key={fact.factId} />)}
    </div>
  );
}

export default FactCard;
