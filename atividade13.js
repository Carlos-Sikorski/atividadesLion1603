

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


let bibliotecaDisponivel = ["a culpa e das estrelas", "1984", "o pequeno principe", "coleção turma da mônica"];

let bibliotecaIndisponivel = [];

console.log("Olá caro estudante! \nNossos livros disponíveis são: ");

for(let i = 0; i < bibliotecaDisponivel.length; i++){

    console.log(`Disponível: ${bibliotecaDisponivel[i]}`);

}

rl.question("Você gostaria de fazer qual ação hoje? \n[1] Devolver Livro \n[2] Buscar um Livro \n[3] Emprestar um Livro\n R: ", (input) =>{

    input = Number(input);

    if(input === 1) {

        rl.question("Qual livro você gostaria de devolver?\n R: ", (livroDevolvido) => {

            bibliotecaDisponivel.push(livroDevolvido);

            console.log("Obrigado pela sua devolução. Ótimo dia!")

            console.log("***Biblioteca Atualizada***")

                        for(let i = 0; i < bibliotecaDisponivel.length; i++){

                            console.log(`Disponível: ${bibliotecaDisponivel[i]}`);
                        
                        }



            rl.close()

        }) 

    } 

    else if(input === 2) {

        console.log("\nNossos livros disponíveis são: ")

        for(let i = 0; i < bibliotecaDisponivel.length; i++){

            console.log(`Disponível: ${bibliotecaDisponivel[i]}`);
        
        }

        rl.question("Qual livro você está buscando?\n R: ", (input2) => {

           const livroProcurado = input2.toLowerCase();

            if(bibliotecaDisponivel.includes(livroProcurado)) {

                rl.question("Seu livro está disponível para empréstimo, gostaria de emprestar? \n [1] SIM \n [2] NÃO\n R: " , (livroEmp) => {

                    livroEmp = Number(livroEmp);

                    if(livroEmp === 1) {

                        const livroRm = bibliotecaDisponivel.indexOf(livroProcurado)
                        bibliotecaDisponivel.splice(livroRm,1)
                        bibliotecaIndisponivel.push(livroProcurado)

                        console.log("Empréstimo bem sucedido! Ficamos a disposição, aproveite sua leitura!")

                        console.log("***Biblioteca Atualizada***")

                        for(let i = 0; i < bibliotecaDisponivel.length; i++){

                            console.log(`Disponível: ${bibliotecaDisponivel[i]}`);
                        
                        }

                    } else {console.log("Entendi. Até o próximo dia!")
                        rl.close()
                    }
                })
               
            } else {console.log("Seu livro não foi encontrado no nosso banco de dados.")
            rl.close()
        }
        })

    }

    else if (input === 3) {

        console.log("Nossos livros disponíveis são: ")

        for(let i = 0; i < bibliotecaDisponivel.length; i++){

            console.log(`Disponível: ${bibliotecaDisponivel[i]}`);
        
        }

        rl.question("Qual livro você gostaria de emprestar?\n R: ", (input2) => {

            livroEmp2 = input2.toLowerCase();

            if(bibliotecaDisponivel.includes(livroEmp2)) {

                rl.question("Seu livro está disponível para empréstimo, gostaria de emprestar? \/ [1] SIM [2] NÃO\n R: " , (livroEmp3) => {

                    livroEmp3 = Number(livroEmp3);

                    if(livroEmp3 === 1) {

                        const livro3Rm = bibliotecaDisponivel.indexOf(livroEmp2)
                        bibliotecaDisponivel.splice(livro3Rm,1)
                        bibliotecaIndisponivel.unshift(livroEmp2)

                        console.log("Empréstimo bem sucedido! Ficamos a disposição, aproveite sua leitura!")

                        console.log("***Biblioteca Atualizada***")

                        for(let i = 0; i < bibliotecaDisponivel.length; i++){

                            console.log(`Disponível: ${bibliotecaDisponivel[i]}`);
                        
                        }


                        rl.close()

                    } else {console.log("Entendi. Até o próximo dia!")}
                    rl.close()
                })
            } else {console.log("Seu livro não foi encontrado no nosso banco de dados.")}
            rl.close()
        })
    }
})
