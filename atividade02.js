

const readline = require("readline");

const rl = readline.createInterface ({

    input: process.stdin,
    output: process.stdout

})

rl.question("Qual seu nome?\n", (nome) => {

    rl.question("Qual a sua idade?\n", (idade) => {

        rl.question("Você possuí habilitação para carro?\n", (cnhSts) => {

            const resposta = cnhSts.toLowerCase()

            if(resposta === "sim" || resposta === "s") {

                console.log("Que legal que você já pode dirigir! Dirija com cuidado!\n")
                
                

            } 
            
            else if(resposta === "não" || resposta ==="n") {
                
                console.log("Entendo que ainda não tem... mas no tempo certo, você estará habilitado.\n")
                

            } else {console.log(`Infelizmente não entendi o que quis dizer.`)}
            
                rl.close()
        })


    })

})