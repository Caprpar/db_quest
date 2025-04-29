const mysql = require("mysql2")
const connectionMySQL = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db_quest",
})

module.exports = connectionMySQL
