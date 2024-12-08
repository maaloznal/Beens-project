import { useState } from "react";
import Modal from "../Modal";
import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css";

const Nav = () => {
  const [isModal, setModal] = useState(false);

  return (
    <nav className={style.container}>
      <a>Beans</a>
      <a>Facts</a>
      <a>Reciptes</a>
      <a>Combinations</a>
      <a>History</a>
      <SwitchTheme />
      <Modal isModal={isModal} onClick={()=>setModal(false)}/>
    </nav>
  );
};

export default Nav;
