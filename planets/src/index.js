const app = require('./app');

async function main() {
    const PORT = 3003;
    const nameServer = 'Planets';
    await app.listen(3003);
    console.log(`Server ${nameServer} in the port: ${PORT}`);
};

main();