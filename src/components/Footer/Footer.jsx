import React from "react";

import styles from "./Footer.module.scss";
import SocialMedia from "../SocialMedia/SocialMedia.jsx";
import { scrollToTop } from "../../helper/helper";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-info"]}>
        <img
          src={require("../../assets/logo.png")}
          alt="logo"
          onClick={scrollToTop}
        />
        <p>Lokesh Ravindran</p>
        <SocialMedia isFooter={true} />
      </div>
      <div className={styles["footer-content"]}>
        <p>Made with alot of effort &copy; obviously me (Lokesh Ravindran)</p>
        <p>
          Developed by <span>Lokesh Ravindran</span> | Designed by{" "}
          <span>Sayali Deshpande</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
