

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

console.log("Olá. Seja bem vindo a universidade DEV. Vamos solicitar algumas informações para seguir com sua matrícula!")

rl.question("Qual seu nome completo?\n", (inputNome) => {


    rl.question(`Agora me diga Sr.${inputNome}, qual sua idade?\n`, (inputIdade) => {


        rl.question(`Qual curso você está iniciando?\n`, (inputCurso) => {

            const cadastroAluno1 = [inputNome, inputIdade, inputCurso];

            console.log(`Sr. ${inputNome}, seus dados são: `)

            for( let i = 0; i < cadastroAluno1.length; i++) {

               
                console.log(cadastroAluno1[i]);

            }

            rl.close()

        })

    })

})



/* const obj = {
    params: "teste"
}

const arr = []

arr.push(obj)


for( let i = 0; i < arr.length; i++){
    console.log(arr[i])
} */
