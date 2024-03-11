const express = require('express');
const filmsController = require('../controllers/films');
const router = express.Router();

router.get('/films', filmsController.getAllFilms);

router.post('/films', filmsController.createFilm);

router.delete('/films/:id', filmsController.deleteFilm);

router.put('/films/:id', filmsController.updateFilm);

module.exports = router;






