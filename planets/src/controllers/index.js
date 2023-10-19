const { catchedAsync } = require('../utils');

module.exports = {
    getPlanetsController: catchedAsync(require('./getPlanets')),
    createPlanetController: catchedAsync(require('./createPlanet'))
}