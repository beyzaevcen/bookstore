const db = require('../utils/database');

async function getAllFilms() {
    try {
        const q = "SELECT * FROM films";
        const data= await db.query(q);
        return data;
    } catch (err) {
        throw err; // Throw the original error for better error handling
    }
}

async function createFilm(filmData) {
    try {
        const q = "INSERT INTO films (`name`, `desc`, `poster`, `imdb`) VALUES (?, ?, ?, ?)";

        const values = [
            filmData.name,
            filmData.desc,
            filmData.poster,
            filmData.imdb,
        ];

        const result = await db.query(q, values); 
        console.log(result);// Return the result of the insertion operation

        return result; 
    } catch (err) {
        throw err; // Throw the original error for better error handling
    }
}


module.exports = {
    createFilm,
    getAllFilms
};

