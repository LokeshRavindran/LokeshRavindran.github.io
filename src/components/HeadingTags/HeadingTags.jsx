import React from "react";

import styles from "./HeadingTags.module.scss";

const HeadingTags = ({ tag, content, isHeading }) => {
  console.log("isHeading", isHeading);
  return (
    <div className={styles["tagContainer"]}>
      <p className={styles["tagContainer-para"]}>
        &lt;{tag}&gt;{" "}
        <span
          className={`${styles["tagContainer-para-content"]} ${
            isHeading ? styles["heading"] : ""
          }`}
        >
          {content}
        </span>{" "}
        &lt;/
        {tag}&gt;
      </p>
    </div>
  );
};

export default HeadingTags;
