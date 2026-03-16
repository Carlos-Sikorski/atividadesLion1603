

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

rl.question("Digite um número: ", (numero) => {

    numero = Number(numero);
    let ehNumero = false;

    for(let i=0; i < lista.length; i++) {

        if(lista[i] === numero) {
            ehNumero = true;
            break;

        }

    }

        if(ehNumero) {

            console.log(`O número ${numero} está na nossa lista de números!`)


        }

        else {console.log(`O número *não* está na nossa lista!`)}

    

    rl.close()



})