require("dotenv").config();
import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
const mongoose = require("mongoose");

// 비구조화 할당을  통해 process.env 내부 값에 대한 래퍼런스 만들기
/* const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  }); */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
