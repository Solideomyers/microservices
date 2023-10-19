const app = require('./app');

async function main() {
    const PORT = 3001;
    const nameServer = 'Characters';
    await app.listen(3001);
    console.log(`Server ${nameServer} in the port: ${PORT}`);
};

main();