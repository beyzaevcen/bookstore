const db = require('../utils/database');

async function getAllFilms() {
    try {
        const q = "SELECT * FROM films";
        const data= await db.query(q);
        return data;
    } catch (err) {
        throw err; 
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
        throw err; 
    }
}
async function deleteFilm(filmid) {
    try {
        const q = "DELETE FROM `test`.`films` WHERE id =?";
        const result = await db.query(q, [filmid]); 
        console.log(result);// Return the result of the insertion operation

        return result; 
    } catch (err) {
        throw err;
    }
}
async function updateFilm(filmdata) {
    try {
        console.log(filmdata)
        const {name,desc,imdb,poster,id}=filmdata;
        const q = "UPDATE films SET `name`= ?, `desc`=?,`imdb`=? ,`poster`=? WHERE id=?";
    
        const result = await db.query(q, [name,desc,imdb,poster,id]); 
        console.log(result);

        return result; 
    } catch (err) {
        console.log(err)
        throw err;
    }
}



module.exports = {
    createFilm,
    getAllFilms,
    deleteFilm,
    updateFilm
};

