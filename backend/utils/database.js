
const mysql = require('mysql2/promise');

const config = {
    host: "localhost",
    user: "root",
    password: "Beyzaevcenim1.",
    database: "test",
}

const pool =mysql.createPool(config);
module.exports={pool};