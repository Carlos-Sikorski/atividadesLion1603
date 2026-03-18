

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

let notas = [];
let mediaFinal = 0;
let somaNotas = 0;

let aprovado = 7
let reprovado = 5 

console.log("Vamos calcular a média das suas ultimas 4 notas!\n")

function suaNota() {

    rl.question("Digite a nota: ", (input) => {

        let nota1 = input
        let loop = notas.length

        notas.push(parseFloat(nota1))

        if(loop < 3) {

            
            suaNota()

        } else {

            notas.forEach(qualquer => somaNotas += qualquer)


            mediaFinal = somaNotas / notas.length
            console.log(mediaFinal)
            rl.close()

            if(mediaFinal >= aprovado) {

                console.log("Você foi aprovado! :)")

            } else if(mediaFinal<reprovado) {

                console.log("Você foi reprovado. :(")

            } else {

                console.log("Você ficou de recuperação! ESTUDE!")

            }

        }





    })

}

suaNota()