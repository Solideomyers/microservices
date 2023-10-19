const characters = require('./characters.json');
const axios = require("axios");

module.exports = {
    list: async () => {
        const results = await axios.get("http://microservicesdb:3005/Character");
        return results.data;
    },
    create: async () => {
        throw Error('Error en el create');
    },
}