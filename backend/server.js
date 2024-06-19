const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dbConfig = require("./db.config");
const app = express();
const port = 3307;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host:'localhost',
  user: "root",
  password: "Pepel!@17",
  database: "parks_and_recreation"
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database");
});

app.get("/api/data", (req, res) => {
  db.query("SELECT * FROM employee_salary", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

app.post("/register", (req, res) => {
  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const full_name = req.body.full_name;
  db.query("INSERT INTO users (username,password,email,full_name) VALUES (?,?,?,?)", [username, password, email, full_name], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ username: username });
   
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = results[0];
    res.json({ message: "Login successful", user });
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});