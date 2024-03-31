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

        return result; 
    } catch (err) {
        throw err; 
    }
}
async function deleteFilm(filmid) {
    try {
        const q = "DELETE FROM `test`.`films` WHERE id =?";
        const result = await db.query(q, [filmid]); 

        return result; 
    } catch (err) {
        throw err;
    }
}
async function updateFilm(filmdata) {
    try {
        const {name,desc,imdb,poster,id}=filmdata;
        const q = "UPDATE films SET `name`= ?, `desc`=?,`imdb`=? ,`poster`=? WHERE id=?";
    
        const result = await db.query(q, [name,desc,imdb,poster,id]); 

        return result; 
    } catch (err) {
        console.log(err)
        throw err;
    }
}
async function getFilm(id) {
    try {
        const q = "SELECT * FROM films WHERE id = ?";
        const data = await db.query(q, [id]);

        if (data.length === 0) {
            // Belirtilen ID'ye sahip bir film bulunamadıysa
            return null; // null döndürerek belirtin.
        }

        return data[0]; // Bulunan filmi döndür
    } catch (err) {
        throw err;
    }
}




module.exports = {
    createFilm,
    getAllFilms,
    deleteFilm,
    updateFilm,
    getFilm
};

