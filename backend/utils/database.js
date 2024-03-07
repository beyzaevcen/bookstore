const mysql = require('mysql2/promise');

const config = {
    host: "localhost",
    user: "root",
    password: "Beyzaevcenim1.",
    database: "test",
}

// Create a function to execute queries
async function query(sql, values) {
    const connection = await mysql.createConnection(config);
    try {
        const [rows, fields] = await connection.execute(sql, values);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        await connection.end();
    }
}

module.exports = { query };
