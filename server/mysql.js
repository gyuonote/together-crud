const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "together123",
  database: "together",
});

connection.connect();

connection.query("select * from board", function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();
