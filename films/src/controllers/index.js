const { catchedAsync } = require('../utils');

module.exports = {
    getFilmsController: catchedAsync(require('./getFilms')),
    createFilmController: catchedAsync(require('./createFilm'))
}