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
        const result = await filmsModel.createFilm(req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function deleteFilm(req, res) {
    try {
       
         const filmId = req.params.id;
         const result = await filmsModel.deleteFilm(filmId);
         res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function updateFilm(req, res) {
    try {
       const data= {
        ...req.body,
        id:req.params.id
       }

         const result = await filmsModel.updateFilm(data);
         res.json(result);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
module.exports = {
    createFilm,
    getAllFilms,
    deleteFilm,
    updateFilm
};

