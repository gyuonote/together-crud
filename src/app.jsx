import styles from "./app.module.css";
import Signup from "./components/signup/signup";

function App() {
  return (
    <div className={styles.app}>
      <Signup />
    </div>
  );
}

export default App;
