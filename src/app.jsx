import styles from "./app.module.css";
import Board from "./components/board/board";

function App() {
  return (
    <div className={styles.app}>
      <Board />
    </div>
  );
}

export default App;
