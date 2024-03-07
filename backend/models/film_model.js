const db = require('../utils/database');

async function getAllFilms() {
    try {
        const q = "SELECT * FROM films";
        const [rows, fields] = await db.query(q);
        return rows;
    } catch (err) {
        throw err; // Throw the original error for better error handling
    }
}

async function createFilm(filmData) {
    try {
        const q = "INSERT INTO films(`name`,`desc`,`poster`) VALUES(?, ?, ?)";
        const values = [
            filmData.name,
            filmData.desc,
            filmData.poster,
        ];
        const result = await db.query(q, values); 
        return result; // Return the result of the insertion operation
    } catch (err) {
        throw err; // Throw the original error for better error handling
    }
}

module.exports = {
    createFilm,
    getAllFilms
};

