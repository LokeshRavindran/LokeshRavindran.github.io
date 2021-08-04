//style imports
import styles from "./Main.module.css";
// import constructionImage from "./website_under_construction.jpeg";

const Main = () => {
  return (
    <main id={styles["main"]}>
      <code>
        Hi There. See you soon... <i class="far fa-smile-wink"></i>
      </code>
      <div id={styles["image"]}></div>
    </main>
  );
};

export default Main;
