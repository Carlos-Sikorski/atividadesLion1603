


const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

rl.question("Me diga, qual seu nome?\n", (nome) => {
    
    rl.question("Agora me conta, qual sua idade?\n", (idade) => {

        console.log(`Entendi! Seu nome é ${nome} e sua idade é ${idade}.`)

rl.close();

});
});



