import React from "react";

import styles from "./Resume.module.scss";

const Resume = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1YGYg8gtJG2XuVakYSGsr-7E5F3vTDJ7g/view?usp=sharing"
      target="_blank"
      className={styles["resume"]}
    >
      Resume
    </a>
  );
};

export default Resume;
