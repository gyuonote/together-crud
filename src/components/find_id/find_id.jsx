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
          <div className={styles.title}>이름</div>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your name"
          />
        </li>
        <li className={styles.item}>
          <div className={styles.title}>전화번호</div>
          <input
            className={styles.input}
            type="tel"
            placeholder="Enter your phone number"
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
