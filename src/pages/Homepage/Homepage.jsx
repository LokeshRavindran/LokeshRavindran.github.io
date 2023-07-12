import React, { useReducer } from "react";

import Header from "../../components/Header/Header.jsx";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo.jsx";
import ContactMe from "../../components/ContactMe/ContactMe.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import MobNav from "../../components/MobNav/MobNav.jsx";
import styles from "./Homepage.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize.jsx";
import { MOBILE_BREAK_POINT } from "../../common/constants";

const Homepage = () => {
  const { windowWidth } = useWindowSize();
  const isMobile = windowWidth < MOBILE_BREAK_POINT; // mobile device breakpoint 320px — 480px
  const [mobileNav, toggleMobileNav] = useReducer((prevState) => {
    console.log("checking");
    return !prevState;
  }, false);

  return (
    <div className={styles["homepage-container"]}>
      <Header
        isMobile={isMobile}
        mobileNav={mobileNav}
        toggleMobileNav={toggleMobileNav}
      />
      {mobileNav && <MobNav toggleMobileNav={toggleMobileNav} />}
      {!isMobile && <SocialMedia />}
      <main className={styles["mainContent"]}>
        <PersonalInfo isMobile={isMobile} />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
