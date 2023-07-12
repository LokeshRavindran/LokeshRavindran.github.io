import React from "react";

import styles from "./ContactMe.module.scss";
import HeadingTags from "../HeadingTags/HeadingTags.jsx";

const ContactMe = () => {
  return (
    <section className={styles["contactSection"]} id="contact-me">
      <div className={styles["contactSection-details"]}>
        <HeadingTags tag={"h2"} content={"Contact Me"} isHeading={true} />
        <div>
          <HeadingTags
            tag={"p"}
            content={"Let's stay in touch..."}
            isHeading={false}
          />
        </div>
        <div className={styles["contactSection-details-info"]}>
          <img
            src={require("../../assets/smileys/relieved-face.png")}
            alt={"smiley-relieved-face"}
          />
          <p>
            If you are interested in hiring me or wanted to discuss anything
            over a cup of coffee{" "}
            <img
              src={require("../../assets/smileys/winking-face-with-tongue.png")}
              alt="smiley-tongue-out"
            />
            , please provide the following details so that i can connect with
            you
          </p>
        </div>
      </div>
      <div className={styles["contactSection-maps"]}>maps</div>
      <form className={styles["contactSection-form"]}>form</form>
    </section>
  );
};

export default ContactMe;
