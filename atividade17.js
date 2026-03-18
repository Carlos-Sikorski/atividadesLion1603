

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout


})


let usuario1 = {

    user: "carlos",
    senha: "carlos123"

}

rl.question("Digite seu nome de usuário: ", (usuario) => {

    if(usuario === usuario1.user) {

        rl.question("Digite sua senha: ", (senha) => {

            if(senha === usuario1.senha) {

                console.log("Log-in realizado com sucesso!")

                rl.close()

            } else{console.log("Usuário ou senha incorretos.")
            rl.close()}
            


        })
    } else{console.log("Usuário ou senha incorretos.") 
    rl.close()}

})
