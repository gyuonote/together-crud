import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Board from "./components/board/board";
import FindId from "./components/find_id/find_id";
import FindPw from "./components/find_pw/find_pw";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Board} exact />
          {/*라우터의 패스가 login일떄는 login창으로 이동*/}
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/find_id" component={FindId} exact />
          <Route path="/find_pw" component={FindPw} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
