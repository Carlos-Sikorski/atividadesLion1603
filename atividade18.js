

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

listaDeTarefas = [];

console.log("Vamos fazer uma lista de 5 tarefas para você realizar!")

function loopPergunta() {

    rl.question("Qual tarefa você precisa fazer hoje?\nR: ", (tarefa1) => {
        let xxxxx = listaDeTarefas.length
        if(xxxxx < 5) {
            listaDeTarefas.push(tarefa1)
            loopPergunta()
        } else {

            
            
        listaDeTarefas.forEach((tarefa, index) => {
            
            console.log("Sua lista de tarefas é: ")

            console.log(`${index+1} - ${tarefa}`)

            rl.close()
        })
        }
    

    })
}

loopPergunta()




