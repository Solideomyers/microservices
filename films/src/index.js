const app = require('./app');


async function main(){
    const PORT = 3002;
    const nameServer = 'Films';
    await app.listen(3002);
    console.log(`Server ${nameServer} in the port: ${PORT}`);
};

main();