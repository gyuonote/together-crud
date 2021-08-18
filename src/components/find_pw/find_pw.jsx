import React from "react";
import styles from "./find_pw.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";

const FindPw = (props) => (
  <section className={styles.find_id}>
    <Header />
    <section>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.title}>아이디</div>
          <input
            className={styles.input}
            type="text"
            placeholder="아이디를 입력하세요."
          />
        </li>
        <li className={styles.item}>
          <div className={styles.title}>비밀번호</div>
          <input
            className={styles.input}
            type="tel"
            placeholder="비밀번호를 입력하세요."
          />
        </li>

        <li className={styles.item}>
          <button className={styles.id_button}>비밀번호 변경</button>
        </li>
      </ul>
    </section>
    <Footer />
  </section>
);
export default FindPw;
