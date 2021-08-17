import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    <button className={styles.login}>로그인</button>
    <button className={styles.writing}>글쓰기</button>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <i className="fas fa-users fa-2x"></i>
    <h1 className={styles.title}>together</h1>
  </header>
);
export default Header;
