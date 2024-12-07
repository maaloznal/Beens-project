import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css";

const Nav = () => {
  return (
    <nav className={style.container}>
      <a>Beans</a>
      <a>Facts</a>
      <a>Reciptes</a>
      <a>Combinations</a>
      <a>History</a>
      <SwitchTheme />
    </nav>
  );
};

export default Nav;
