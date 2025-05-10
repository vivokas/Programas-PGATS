/*Instaldo extensão IntelliSense para auto complete sugestão codigo. */

/* Funções */

//Funcao nomeada, com parametro sem retorno

function exibirNomePessoa(nome) {
    console.log(nome)
}

//Funcao nomeada, com parametro COM retorno
function obterNomePessoaFormatado(nome) {
    return nome.toUpperCase() 

}

function exibirRacaPessoa(porte = 'Negra') {
    console.log(porte)
}

function objterObjetoPessoa() { //retorno tipo objeto
    return {
        nome: "Viviane", //nome= propriedade ou atributo com valor Viviane
        peso: "60kg",
        idade: 34,
        cor: "Negra"

    }
}


function objterObjetoPessoa() { //retorno tipo objeto
    return {
        nome: "Viviane", //nome= propriedade ou atributo com valor Viviane
        peso: "60kg",
        maisCaracteristica: {
        idade: 34,
        cor: "Negra"
        },
        empregada: true
    }
}

function ListarObjetoPessoa() { //retorno tipo objeto
    return [{
        nome: "Viviane",
        peso: "60kg",
        idade: 34,
        cor: "Negra"

    }, {
        nome: "Viviane",
        peso: "60kg",
        idade: 34,
     
        cor: "Negra"
    }]
}

function ListarNomePessoa() { //retorno tipo objeto
    return [
        'Liá',
        'Estrela',
        'Ester'
    ]
}


exibirNomePessoa("Viviane") //chamado função, passou o nome "Viviane" para o parametro nome que foi impresso
exibirRacaPessoa() // chama função sem passagem de parametro
console.log(obterNomePessoaFormatado("Viviane Aparecida")) //imprimindo função com passagem parametro
console.log(objterObjetoPessoa())
console.log(ListarObjetoPessoa())
console.log(ListarNomePessoa())
