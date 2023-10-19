const app = require('./app');

// const { Character, Film } = require('../src/database');

// Film.list().then((res) =>  console.log(res));

async function main() {
    const PORT = 3005;
    const nameServer = 'Database';
    await app.listen(3005);
    console.log(`Server ${nameServer} in the port: ${PORT}`);
};

main();