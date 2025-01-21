import style from "./style.module.css"
import image from "../../images/main.gif"

const Home = () => {
  return (
    <>
      <div className={style.home_container}>
      <img src={image} alt="" />
      <div className="info">
        <h1>Welcome to the World of Jelly Belly:</h1>
        <p className="text-p">A Rainbow of Flavors Awaits!</p>
      </div>
      </div>
      </>
  );
};

export default Home;
