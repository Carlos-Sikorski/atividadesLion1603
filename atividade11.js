
const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout


});

let numerosUser = []

rl.question("Digite um número: ", (numero1) => {

    numero1 = Number(numero1);
    numerosUser.push(numero1);

    rl.question("Digite outro número: ", (numero2) => {

        numero2 = Number(numero2);
        numerosUser.push(numero2);

        rl.question("Digite um último número: ", (numero3) => {

            numero3 = Number(numero3);
            numerosUser.push(numero3);

            let mediaNumeros = (numero1 + numero2 + numero3) / numerosUser.length

            console.log(`A media dos valores é ${mediaNumeros.toFixed(2)}`)

            rl.close()


        });

    });


});