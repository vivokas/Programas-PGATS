/* Funções de seta/flecha 

*/

//Funcao nomeada, com parametro sem retorno

/*
function exibirNomePessoa(nome) {
    console.log(nome)
} 


function exibirRacaPessoa(raca = 'Negra') {
    console.log(raca)
} 
    

//Funcao nomeada, com parametro COM retorno
function obterNomePessoaFormatado(nome) {
    return nome.toUpperCase() 
} */


//Refatorado
const exibirNomePessoa = (nome) => { //atribuição de função (nome)=>
    console.log(nome)

}

const exibirRacaPessoa = (raca = 'Negra') => {
    console.log(raca)

}

const obterNomePessoaFormatado = (nome) => {
    return nome.toUpperCase()

}

const dobrar = (numero) => numero * 2

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

        maisCaracteristica: { //objeto aninhado
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

//return sempre depois de console.log

exibirNomePessoa("Viviane") //chamado função, passou o nome "Viviane" para o parametro nome que foi impresso
exibirRacaPessoa() // chama função sem passagem de parametro
console.log(obterNomePessoaFormatado("Viviane Aparecida")) //imprimindo função com passagem parametro
console.log(objterObjetoPessoa())
console.log(ListarObjetoPessoa())
console.log(ListarNomePessoa())


