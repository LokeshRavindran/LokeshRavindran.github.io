import React from "react";

import styles from "./Maps.module.scss";

const Maps = () => {
  return (
    <div className={styles["maps"]}>
      <iframe
        src={process.env.LOCATION}
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
