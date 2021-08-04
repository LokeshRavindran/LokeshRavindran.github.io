import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id={styles["footer"]}>
      <a
        href="https://www.linkedin.com/in/lokesh-ravindran-30031998/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-linkedin-in fa-2x"></i>
      </a>

      <a
        href="https://github.com/LokeshRavindran"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-github fa-2x"></i>
      </a>

      <a
        href="mailto:lokeshravindran3003@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <i class="far fa-envelope fa-2x"></i>
      </a>

      <a
        href="https://www.instagram.com/juz_cal_me_lokii/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-instagram fa-2x"></i>
      </a>
    </footer>
  );
};

export default Footer;
