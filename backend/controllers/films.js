const filmsModel = require('../models/film_model');


async function getAllFilms(req, res) {
    try {
        const films = await filmsModel.getAllFilms();
        res.json(films);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createFilm(req, res) {
    try {
        const result = await filmsModel.createFilm(res.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createFilm,
    getAllFilms
};

