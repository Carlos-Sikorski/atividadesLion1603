

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

rl.question("Qual seu nome?\n", (nome) => {

    rl.question(`Olá ${nome}, você pode me dizer qual a sua idade? [SOMENTE NÚMEROS]\n`, (idade) => {

        idade = Number(idade);

        if(idade >= 18) {

        console.log(`Você tem ${idade} anos. Você é maior de idade,`)

        }

        else if(idade < 18) {

        console.log(`Você tem ${idade} anos. Você é menor de idade!`)

        }

        rl.close()


    })


})