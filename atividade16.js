

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

let produtos = {

    nome:[],
    preco:[],
    estoque:[]

}

const listaDeProdutos = []


let sair = true



/* while(sair === true){

    rl.question("digite o nome do produto:\n[digite sair para finalizar]\nR: ", input => {

        if(input != "sair" ) {

            rl.question("agora digite o preço de entrada do produto:\n[digite sair para finalizar]\nR: ", input2 => {

                if(input2 != "sair") {

                    rl.question("para finalizar, digite a quantidade que está entrando no estoque:\n[digite sair para finalizar]\nR: ", input3 => {

                        if(input3 != "sair") {

                            produtos.nome = input
                            produtos.preco = input2
                            produtos.estoque = input3

                            listaDeProdutos.push(produtos);

                            console.log(`Nosso estoque atual é:\n${listaDeProdutos}`)

                        } else{

                            sair = false

                            console.log("Entendi. Até a próxima!")

                            rl.close()

                        }


                    })

                } else{

                    sair = false
                    
                    console.log("Entendi. Até a próxima!")

                    rl.close()

                }

            })

        } else{

            sair = false

            console.log("Entendi. Até a próxima!")

            rl.close()

        }


    })

} */