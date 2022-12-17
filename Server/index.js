const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');  // used to access our backend API's in our React frontend side.
//Nodemon - used for when we do changes in the files, we do not have to restart the server. Nodemon will restart the server automatically
// when we save the files

const db = mysql.createConnection({
    host: "localhost",
    user: "crud_re_no_db_user",
    password: "crud_re_no_db_user",
    database: "crud_re_no_db"
});

db.connect(err => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Database connected!");
    }
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Hello express");
});

app.get("/api/getAllData", (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, result) => {
        if(err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.post("/api/addData", (req, res) => {
    const {name, email, contact} = req.body;
    
    const q = "INSERT INTO users(name, email, contact) VALUES(?, ?, ?)";
    
    db.query(q, [name, email, contact], (err, result) => {
        if(err) {
            console.log(err);
        }
    });
});

app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const q = "DELETE FROM users WHERE id = ?";

    db.query(q, id, (err, result) => {
        if (err) {
            console.log(err);
        }
    });
});

app.get("/api/getData/:id", (req, res) => {
    const { id } = req.params;
    const q = "SELECT * FROM users WHERE id = ?";
    db.query(q, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const{ name, email, contact } = req.body;
    const q = "UPDATE users SET name = ?, email = ?, contact = ? WHERE id = ?";
    db.query(q, [name, email, contact, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.listen(5000, () => {
    console.log("Server is runnin on port 5000");
});
