import { useState } from "react";
import Modal from "../Modal";
import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isModal, setModal] = useState(false);

  return (
    <nav className={style.container}>
      <Link to="/beans">Beans</Link>
      <Link to="/facts">Facts</Link>
      <Link to="/reciptes">Reciptes</Link>
      <Link to="/combinations">Combinations</Link>
      <Link to="/history">History</Link>
      <Link to="/bean">Bean</Link>
      <SwitchTheme />
      <Modal isModal={isModal} onClick={() => setModal(false)} />
    </nav>
  );
};

export default Nav;
