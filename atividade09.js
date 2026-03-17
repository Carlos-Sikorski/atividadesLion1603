

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

rl.question("Se você fosse resumir sua vida em uma frase, qual seria?\n", (frase) =>{

    const fraseTamanho = frase.length

    console.log(`Essa frase tem ${fraseTamanho} caracteres contando o espaço.`)

    const fraseTamSemEspaco = frase.replaceAll(" ", "").length

    console.log(`Essa frase possui ${fraseTamSemEspaco} caracteres *sem contar o espaço*.`)

    rl.close()


})


