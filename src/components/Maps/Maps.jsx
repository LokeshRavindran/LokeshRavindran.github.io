import React from "react";

import styles from "./Maps.module.scss";

const Maps = () => {
  return (
    <div className={styles["maps"]}>
      <iframe
        src={
          "https://www.google.com/maps?q=13.0460783,80.2147462&z=15&output=embed"
        }
        width="100%"
        height="100%"
        style={{ border: "10px" }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Maps;
