import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Board from "./components/board/board";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Board />
          </Route>
          {/*라우터의 패스가 login일떄는 login창으로 이동*/}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
