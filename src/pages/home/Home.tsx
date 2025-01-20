import image from "../../images/main.gif";
import s from "./s.module.css";

const Home = () => {
  return (
    <div className={s.homeContainer}>
      <img src={image} alt="" />
      <div className={s.info}>
        <h1>Welcome to the World of Jelly Belly:</h1>
        <p>A Rainbow of Flavors Awaits!</p>
      </div>
    </div>
  );
};

export default Home;
