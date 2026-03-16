

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

let listaHobbies = [];

rl.question("Operador, como é seu nome?\n", (nome) => {

    rl.question(`${nome}, você pode me contar um hobbie que você gosta muito?\n`, (hbb1) => {

        listaHobbies.push(hbb1);

        rl.question("Entendi! Tem mais algum hobbie que você faz no seu tempo livre?\n", (hbb2) => {

            listaHobbies.push(hbb2);

            console.log("Seus hobbies são: ");

            listaHobbies.forEach((hobbie) => {

                console.log(hobbie)


            });

            rl.close()

        })

    })
})


