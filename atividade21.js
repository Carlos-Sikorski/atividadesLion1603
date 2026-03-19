

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

let contatos = {

    nome:[],
    telefone:[],
    cidade:[]

}

const listaContatos = []


let sair = true

let i = 3

function cadastroContatos() {

    if(listaContatos.length < i) {

        console.log("Seja bem vindo ao sistema de cadastro de contatos!\n")

        rl.question("Informe o nome do contato: ", (input) => {

            let nome = input
            

            rl.question("Informe o telefone do contato: ", (input2) => {

                let telefone = input2

                rl.question("Informe a cidade de origem o contato: ", (input3) => {

                    let cidade = input3

                    let contatoCadastro = {

                    nome : nome,
                    telefone : telefone,
                    cidade : cidade

                    }

                    listaContatos.push(contatoCadastro)


                    cadastroContatos()

                })

            })

        })

    } else {

        console.log("Seus contatos cadastrados são: ")

        
        listaContatos.forEach(contato => 
            
            console.log(`Lista de Contatos: ${contato.nome} | ${contato.telefone} | ${contato.cidade}`))

            rl.close()

        }

        


}

cadastroContatos()
