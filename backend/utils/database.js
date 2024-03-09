const mysql = require('mysql2/promise');

const config = {
    host: "127.0.0.1",
    user: "root",
    password: "12234",
    database: "test",
}

// Create a function to execute queries
async function query(sql, values) {
    const connection = await mysql.createConnection(config);
    try {
        const [rows] = await connection.execute(sql, values);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        await connection.end();
    }
}

module.exports = { query };
