import styles from "./app.module.css";
import Board from "./components/board/board";
import FindId from "./components/find_id/find_id";
import FindPw from "./components/find_pw/find_pw";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <div className={styles.app}>
      <FindPw />
    </div>
  );
}

export default App;
