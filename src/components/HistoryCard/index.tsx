import { useEffect, useState } from "react";
import { History } from "../../types/all-type";
import "./style.css";
import AllHistory from "../AllHistory";


const HistoryCard = () => {
  const [updateHistory, setUpdateHistory] = useState<null | History[]>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getHistory = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const historyApi = await fetch(
        "https://jellybellywikiapi.onrender.com/api/MileStones?pageIndex=1&pageSize=16"
      );
      console.log(historyApi);
      const data = await historyApi.json();
      setIsLoading(false);
      setUpdateHistory(data.items);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="historyCard">
      {isLoading && <p>...loading</p>}
      {isError && <p>...перезагрузите страницу</p>}
      {updateHistory &&
        updateHistory.map((history) => (
          <AllHistory data={history} key={history.mileStoneId} />
        ))}
    </div>
  );
};

export default HistoryCard;
