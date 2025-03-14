import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import LogoImage from "../../assets/Logo.png";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoDiv}>
          <Link to="/">
            <img src={LogoImage} alt="logo" width={67} />
          </Link>
        </div>
        <Search search={"Search a song of your choice"} />
        <Button children="Give Feedback" />
      </nav>
    </>
  );
}

