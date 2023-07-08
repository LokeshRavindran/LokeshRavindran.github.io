import React, { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleWindowResize() {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { windowHeight, windowWidth };
};
