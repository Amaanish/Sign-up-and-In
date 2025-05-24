const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // all your HTML, CSS, JS go in /public

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'recipe_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Routes

// Signup handler
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.send('<h3>Username or email already exists. <a href="/">Try again</a></h3>');
      }
      console.error('Signup error:', err);
      return res.send('<h3>Signup failed. <a href="/">Try again</a></h3>');
    }
    // Redirect to login after successful signup
    res.redirect('/login.html');
  });
});

// Login handler
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.send('<h3>Login failed. <a href="/login.html">Try again</a></h3>');
    }
    if (results.length > 0) {
      // Redirect to success page after login
      res.redirect('/success.html');
    } else {
      res.send('<h3>Invalid credentials. <a href="/login.html">Try again</a></h3>');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
