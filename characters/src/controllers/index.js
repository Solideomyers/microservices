const { catchedAsync } = require('../utils');

module.exports = {
    getCharactersController: catchedAsync(require('./getCharacters')),
    createCharacterController: catchedAsync(require('./createCharacter'))
}