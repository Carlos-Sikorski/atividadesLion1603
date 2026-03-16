

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout


});

rl.question("Você gota do seu café preto e sem açúcar?\n", (cfInput) => {
    
    const cafeGood = cfInput.toLowerCase()

    if(cafeGood === "sim" || cafeGood === "s") {

        console.log("Que legal! Essa é a melhor forma de se tomar café!\n")

        rl.close()

    }

    else if(cafeGood === "não" || cafeGood === "n") {

        rl.question("Então me conta... de que forma você gosta seu café?\n", (resposta) => {

            console.log(`Que bacana! Você gosta do seu café ${resposta}. Muito bom!`)

        rl.close()
       


        })


    }

 

})

