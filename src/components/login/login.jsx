import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
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
              placeholder="아이디를 입력하세요"
            />
          </li>
          <li className={styles.item}>
            <div className={styles.title}>비밀번호</div>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </li>
          <li className={styles.item}>
            <button className={styles.login_button} onClick={onLogin}>
              로그인
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.id_button} onClick={onLogin}>
              아이디찾기
            </button>
            <button className={styles.pw_button} onClick={onLogin}>
              비밀번호찾기
            </button>
            <button className={styles.signup_button} onClick={onLogin}>
              회원가입
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
