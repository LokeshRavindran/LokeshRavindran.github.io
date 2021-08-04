//component imports
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

//css imports
import styles from "./App.module.css";

function App() {
  return (
    <div id={styles["app"]}>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
