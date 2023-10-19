const films = require('./films.json');
const axios = require("axios");

module.exports = {
    list: async () => {
        const results = await axios.get("http://microservicesdb:3005/Film");
        return results.data;
    },
    create: async () => {
        throw Error('Error en el create');
    },
}