import { useEffect, useState } from "react";
import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={style.container}>
      {isMobile ? (
        <>
          <div className={style.burger} onClick={toggleMenu}>
            <div className={style.burgerLine}></div>
            <div className={style.burgerLine}></div>
            <div className={style.burgerLine}></div>
          </div>
          {isMenuOpen && (
            <div className={style.mobileMenu}>
              <Link to="/beans" onClick={toggleMenu}>
                Beans
              </Link>
              <Link to="/facts" onClick={toggleMenu}>
                Facts
              </Link>
              <Link to="/reciptes" onClick={toggleMenu}>
                Reciptes
              </Link>
              <Link to="/combinations" onClick={toggleMenu}>
                Combinations
              </Link>
              <Link to="/history" onClick={toggleMenu}>
                History
              </Link>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          <SwitchTheme />
          <Link to="/beans">Beans</Link>
          <Link to="/facts">Facts</Link>
          <Link to="/reciptes">Reciptes</Link>
          <Link to="/combinations">Combinations</Link>
          <Link to="/history">History</Link>
          <Link to="/about">About</Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
