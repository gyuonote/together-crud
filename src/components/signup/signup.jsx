import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./signup.module.css";

const Signup = () => {
  return (
    <section className={styles.signup}>
      <Header />
      <section>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.title}>아이디</div>
            <input
              className={styles.check_input}
              type="text"
              placeholder="아이디를 입력하세요."
            />
            <button className={styles.check_button}>중복확인</button>
          </li>
          <li className={styles.item}>
            <div className={styles.title}>비밀번호</div>
            <input type="password" placeholder="비밀번호를 입력하세요." />
          </li>
          <li className={styles.item}>
            <div className={styles.title}>이메일</div>
            <input type="text" placeholder="이메일을 입력하세요." />
          </li>
          <li className={styles.item}>
            <div className={styles.title}>닉네임</div>
            <input type="text" placeholder="닉네임을 입력하세요." />
          </li>
          <li className={styles.item}>
            <div className={styles.title}>전화번호</div>
            <input type="text" placeholder="전화번호를 입력하세요." />
          </li>
          <li>
            <button className={styles.signup_button} value="submit">
              회원가입
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Signup;
