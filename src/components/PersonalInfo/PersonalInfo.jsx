import React from "react";

import styles from "./PersonalInfo.module.scss";
import BottomNav from "../BottomNav/BottomNav.jsx";

const PersonalInfo = () => {
  return (
    <section className={styles["infoSection"]}>
      <div className={styles["infoSection-welcome"]}>
        <img
          src={require("../../assets/smileys/beaming-face-with-smiling-eyes.png")}
          alt="smiley-teeth-show"
        />
        <p>Holla!</p>
      </div>
      <div className={styles["infoSection-about"]}>
        <h1>I'm Lokesh</h1>
        <h1>Web Developer</h1>
      </div>
      <div className={styles["infoSection-intro"]}>
        <p>I love creating things for the web.</p>
        <p>
          I'm a{" "}
          <span>
            continuous learner who loves to solve challenges and explore new
            things.
          </span>
        </p>
        <p>
          Checkout out my profile and let me know if you want to connect with me
          over a cup of coffee.{" "}
          <img
            src={require("../../assets/smileys/winking-face-with-tongue.png")}
            alt="smiley-tongue-out"
          ></img>
        </p>
      </div>
      <BottomNav />
    </section>
  );
};

export default PersonalInfo;
