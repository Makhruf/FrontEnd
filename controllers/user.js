const connection = require('../db/db');
const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res) => {
        const { username, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);

        const insertQuery = 'INSERT INTO user (username, password) VALUES (?, ?)';
        connection.query(insertQuery, [username, hashedPassword], (err, results) => {
            if (err) {
                console.log("Error registering user: ", err);
                return res.status(500).send({
                    message: err.message || "Registration failed"
                });
            }
            res.status(201).send({ message: "User registered successfully", userId: results.insertId });
        });
    },

    login: (req, res) => {
        const { username, password } = req.body;

        const selectQuery = 'SELECT * FROM user WHERE username = ?';
        connection.query(selectQuery, [username], (err, results) => {
            if (err) {
                console.log("Error logging in: ", err);
                return res.status(500).send({
                    message: err.message || "Login error"
                });
            }
            if (results.length === 0 || !bcrypt.compareSync(password, results[0].password)) {
                return res.status(401).send({ message: "Invalid username or password" });
            }
            req.session.isAuthenticated = true;
            res.send({ message: "Login successful", username: results[0].username });
        });
    },

    logout: (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.log("Error logging out: ", err);
                return res.status(500).send("Logout failed");
            }
            res.send('Logout successful');
        });
    },

    authenticate: (req, res, next) => {
        if (req.session.isAuthenticated) {
            next();
        } else {
            res.status(401).send("Not authenticated");
        }
    }
};
