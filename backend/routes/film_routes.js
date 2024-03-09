const express = require('express');
const filmsController = require('../controllers/films');
const router = express.Router();

router.get('/films', filmsController.getAllFilms);

router.post('/add', filmsController.createFilm);

module.exports = router;






