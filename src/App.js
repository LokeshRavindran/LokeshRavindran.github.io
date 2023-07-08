import React, { useState } from "react";

import Loader from "./components/Loader/Loader.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import styles from "./App.module.scss";

const App = () => {
  let [backgroundDisplay, updateBackgroundDisplay] = useState(true);

  setTimeout(() => {
    updateBackgroundDisplay(false);
  }, 3);

  return (
    <div className={styles["app"]}>
      {backgroundDisplay ? <Loader /> : <Homepage />}
    </div>
  );
};

export default App;
