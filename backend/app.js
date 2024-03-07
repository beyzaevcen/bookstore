const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')// Import mysql2/promise for async/await support
const app = express()

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Beyzaevcenim1.",
    database: "test",
});

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("hi");
});

app.get("/films", async (req, res) => {
    try {
        const q = "SELECT * FROM films";
        const [rows, fields] = await db.query(q);
        res.json(rows);
    } catch (err) {
        res.json(err);
    }
});

app.post("/films", async (req, res) => {
    try {
        const q = "INSERT INTO films(`name`,`desc`,`poster`) VALUES(?, ?, ?)";
        const values = [
            req.body.name,
            req.body.desc,
            req.body.poster,
        ];
        const result = await db.query(q, values); 
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.listen(8800, () => {
    console.log('connected with backend');
});
