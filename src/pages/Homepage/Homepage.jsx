import React from "react";

import styles from "./Homepage.module.scss";
import Header from "../../components/Header/Header.jsx";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo.jsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";

const Homepage = () => {
  return (
    <div className={styles["homepage-container"]}>
      <Header />
      <SocialMedia />
      <main className={styles["mainContent"]}>
        <PersonalInfo />
      </main>
    </div>
  );
};

export default Homepage;
