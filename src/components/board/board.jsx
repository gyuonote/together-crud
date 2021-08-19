import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./board.module.css";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";

const Board = () => {
  //화면에서 다른 라우터로 갈떄는 히스토리 라는 것을이용
  const history = useHistory();
  const goToLogin = () => {
    history.push({
      pathname: "/login",
    });
  };
  return (
    <section className={styles.board}>
      <Header />
      <div className={styles.container}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </section>
  );
};

export default Board;
