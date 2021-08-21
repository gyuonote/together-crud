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
          <input className={styles.input} type="text" placeholder="Enter id" />
        </li>
        <li className={styles.item}>
          <div className={styles.title}>이메일</div>
          <input
            className={styles.input}
            type="tel"
            placeholder="Enter your e-mail adress"
          />
        </li>

        <li className={styles.item}>
          <button className={styles.id_button}>비밀번호 찾기</button>
        </li>
      </ul>
    </section>
    <Footer />
  </section>
);
export default FindPw;
