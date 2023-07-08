import React from "react";
import { FaLinkedin, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

// style imports
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles["social-container"]}>
      <a href="https://github.com/LokeshRavindran" target="_blank">
        <FiGithub size="1.5rem" title="github" />
      </a>
      <a href="mailto:lokeshravindran3003@gmail.com" target="_blank">
        <FaRegEnvelope size="1.5rem" title="email" />
      </a>
      <a
        href="https://www.linkedin.com/in/lokesh-ravindran-30031998/"
        target="_blank"
      >
        <FaLinkedin size="1.5rem" title="linkedin" />
      </a>
      <a href="https://www.instagram.com/juz_cal_me_lokii/" target="_blank">
        <FaInstagram size="1.5rem" title="instagram" />
      </a>
    </div>
  );
};

export default SocialMedia;
