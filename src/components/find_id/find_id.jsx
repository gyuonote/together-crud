import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./find_id.module.css";

const FindId = (props) => (
  <section className={styles.find_id}>
    <Header />
    <section>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.title}>이메일</div>
          <input
            className={styles.input}
            type="text"
            placeholder="이메일을 입력하세요."
          />
        </li>
        <li className={styles.item}>
          <div className={styles.title}>전화번호</div>
          <input
            className={styles.input}
            type="tel"
            placeholder="전화번호를 입력하세요."
          />
        </li>

        <li className={styles.item}>
          <button className={styles.id_button}>아이디찾기</button>
        </li>
      </ul>
    </section>
    <Footer />
  </section>
);

export default FindId;
