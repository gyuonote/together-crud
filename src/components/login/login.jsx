import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
  //{/*화면에서 다른 라우터로 갈떄는 히스토리 라는 것을이용*/}
  const onLogin = (event) => {};
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.title}>아이디</div>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter id"
            />
          </li>
          <li className={styles.item}>
            <div className={styles.title}>비밀번호</div>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter password"
            />
          </li>
          <li className={styles.item}>
            <button className={styles.login_button} onClick={onLogin}>
              로그인
            </button>
          </li>
          <li className={styles.item}>
            <Link to="/find_id">
              <button className={styles.id_button} onClick={onLogin}>
                아이디찾기
              </button>
            </Link>
            <Link to="/find_pw">
              <button className={styles.pw_button} onClick={onLogin}>
                비밀번호찾기
              </button>
            </Link>
            <Link to="/signup">
              <button className={styles.signup_button} onClick={onLogin}>
                회원가입
              </button>
            </Link>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
