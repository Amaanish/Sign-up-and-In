This is a very simple HTML project where I implemented HTML, CSS, Node.js, and JavaScript to create a basic login and sign-up system. The front-end consists of clean HTML pages styled with CSS, including signup.html, login.html, and success.html.
On the backend, I used Node.js with the Express.js framework to handle HTTP requests and interact with a MySQL database, where user credentials (username, email, and password) are stored.
The sign-up page allows users to create an account, which is saved in the database. After successful registration, users are redirected to the login page.
Upon logging in with valid credentials, they are taken to a simple success page.

To run the project, Node.js needs to be installed.
I downloaded Node.js from https://nodejs.org and installed the LTS version. During the setup, I made sure to select the option to add Node to the system’s PATH. 


How to install:

### 1. Clone the Repository

```bash
git clone https://github.com/Amaanish/Sign-up-and-In.git
cd Sign-up-and-In
```

### 2. Install Node.js

Download and install the LTS version of Node.js from the [official website](https://nodejs.org/).

### 3. Install Dependencies

```bash
npm install express mysql body-parser
```

### 4. Set Up the MySQL Database

- Ensure MySQL is installed and running on your system.
- Open your MySQL client (e.g., MySQL Workbench, phpMyAdmin, or command-line interface).
- Create a new database:

  ```sql
  CREATE DATABASE user_auth;
  ```

- Use the provided `128sqlfile.sql` to create the necessary table:

  ```sql
  USE user_auth;
  -- Execute the contents of 128sqlfile.sql here
  ```

  *Note: Replace `user_auth` with your desired database name if different.*

### 5. Configure Database Connection

In `server.js`, update the MySQL connection settings with your credentials:

```javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'user_auth'
});
```

### 6. Start the Server

```bash
node server.js
```

The server will start on `http://localhost:3000`.

---

## 🧪 Usage

1. Navigate to `http://localhost:3000/signup.html` to create a new account.
2. After successful registration, you'll be redirected to the login page.
3. Log in with your credentials to access the success page.

---

## 🔒 Security Considerations

- **Password Handling**: Currently, passwords are stored in plain text. For production use, implement hashing (e.g., using `bcrypt`) to securely store passwords.
- **Input Validation**: Add server-side validation to prevent SQL injection and other malicious inputs.
- **Session Management**: Implement session handling to maintain user authentication states.

---
