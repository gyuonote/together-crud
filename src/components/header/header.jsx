import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({ onLogout, onLogin, onsignup }) => (
  <header className={styles.header}>
    <Link to="/login">
      {true && <button className={styles.login}>로그인</button>}
    </Link>

    <Link to="/signup">
      {true && <button className={styles.writing}>회원가입</button>}
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
