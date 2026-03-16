

const readline = require("readline");

const rl = readline.createInterface ({

    input: process.stdin,
    output: process.stdout

});

const anoAtual = new Date().getFullYear();

console.log(`Nós estamos no ano de ${anoAtual}.`)

rl.question("Operador, em qual ano você nasceu? [SOMENTE NÚMEROS]\n", (userYear) => {

    userYear = Number(userYear);

    let userAge = anoAtual - userYear;

    console.log(`Atualmente você tem ${userAge} anos de idade.`);

rl.close();

});