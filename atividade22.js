

const readline = require("readline");
const { isNumberObject } = require("util/types");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

let carrinho = {

    nome:"",
    preco:"",
    quantidade:""

};

let carrinhoFinal = [];

let valorFinal = [];

let valor = [];

console.log("Seja bem vindo ao SuperMercado LIONS!\nVamos solicitar algumas informações para montar seu carrinho de compras!\n**ATENÇÃO**\n**DIGITE 'sair' PARA FINALIZAR A QUALQUER MOMENTO.")

function cadastroProduto() {

    let cadastroOn = true;

    if(cadastroOn === true) {

        rl.question("Digite o nome do produto: ", (input) => {

            if(input !== "sair") {

                nome = input;

                rl.question("Digite o preço do produto: ", (input2) => {

                    if(input2 !== "sair") {

                        preco = input2;

                       

                        rl.question("Digite a quantidade de produtos: ", (input3) => {

                            if(input3 !== "sair") {

                                preco = Number(preco)

                                quantidade = input3;

                                valor = preco * quantidade

                                valorFinal.push(quantidade)

                                let carrinhoTotal = {

                                    nome : nome,
                                    preco : preco,
                                    quantidade : quantidade

                                }

                                carrinhoFinal.push(carrinhoTotal)

                                cadastroProduto()

                            } else {
                                cadastroOn = false;
                                console.log("Seu carrinho de compras é: ")
                                let total1 = 0;
                                carrinhoFinal.forEach((produto)=> {

                                    total1 = total1 + (produto.preco*produto.quantidade); 

                                    
                                    console.log(`Produto:${produto.nome}, Preço:${produto.preco}, Quantidade:${produto.quantidade}`)

                                    console.log(`O valor total do seu carrinho é de R$ ${total1}`)

                                    rl.close()

                            })
                                
                

                                
                                
                            }

                        })

                    } else{
                        cadastroOn = false;
                        console.log("Seu carrinho de compras é: ")
                        let total1 = 0;
                        carrinhoFinal.forEach((produto)=> {

                            total1 = total1 + (produto.preco*produto.quantidade); 

                        
                            console.log(`Produto:${produto.nome}, Preço:${produto.preco}, Quantidade:${produto.quantidade}`)

                            console.log(`O valor total do seu carrinho é de R$ ${total1}`)

                            rl.close()

                        })
                    }
                })
                

            } else{
                cadastroOn = false;
                console.log("Seu carrinho de compras é: ")
                let total1 = 0;
                carrinhoFinal.forEach((produto)=> {

                    total1 = total1 + (produto.preco*produto.quantidade); 

                    
                    console.log(`Produto:${produto.nome}, Preço:${produto.preco}, Quantidade:${produto.quantidade}`)

                    console.log(`O valor total do seu carrinho é de R$ ${total1}`)

                    rl.close()

                }) 
            }
        })
    }
}

cadastroProduto()

