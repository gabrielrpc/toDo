import React from "react";
import styles from "./Header.module.css";
import logo from ".././imgs/Logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt="Logo to-do" />
    </header>
  );
};

export default Header;
