import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    <Link to="/login">
      <button className={styles.login}>로그인</button>
    </Link>

    <Link to="/signup">
      <button className={styles.writing}>회원가입</button>
    </Link>

    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <i className="fas fa-users fa-2x"></i>
    <h2 className={styles.title}>together</h2>
  </header>
);
export default Header;
