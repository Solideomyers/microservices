const { Router } = require('express');
const router = Router();

const controllers = require('../controllers');
const middlewares = require('../middlewares');

router.get('/', controllers.getFilmsController);
router.post('/', middlewares.filmValidation, controllers.createFilmController);
// router.use('/films',  require('./filmsRouter'));

module.exports = router;