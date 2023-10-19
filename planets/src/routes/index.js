const { Router } = require('express');
const router = Router();

const controllers = require('../controllers');
const middlewares = require('../middlewares');

router.get('/', controllers.getPlanetsController);
router.post('/', middlewares.planetValidation, controllers.createPlanetController);
// router.use('/planets', require('./planetsRouter'));

module.exports = router;
