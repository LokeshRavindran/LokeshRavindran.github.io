import React from "react";

import styles from "./Button.module.scss";

const Button = ({ text, type }) => {
  return (
    <button className={styles.btn} type={type}>
      {text}
    </button>
  );
};

export default Button;
