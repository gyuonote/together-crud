const maria = require("mysql");
const conn = maria.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "together123",
  database: "together",
});
module.exports = conn;
