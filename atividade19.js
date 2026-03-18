

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
    
})

saldoConta = 1000

rl.question("Digite um valor para saque: ", (input) => {

    if(input <= saldoConta) {

        saldoConta -= input

        console.log(`Saque de R$ ${input} realizado com sucesso!`)
        console.log(`Seu saldo atual é R$ ${saldoConta}.`)

        rl.close()

    } else{(console.log("Saldo insuficiente"))
    rl.close()
    }


})