const { Router } = require('express');
const router = Router();

const controllers = require('../controllers');
const middlewares = require('../middlewares');

router.get('/', controllers.getCharactersController);
router.post('/', middlewares.characterValidation, controllers.createCharacterController);
// router.use('/characters', require('./charactersRouter'));

module.exports = router;