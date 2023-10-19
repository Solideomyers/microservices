const app = require('./app');

async function main() {
    const PORT = 3004;
    const nameServer = 'GATEWAY';
    await app.listen(3004);
    console.log(`Server ${nameServer} in the port: ${PORT}`);
};

main();