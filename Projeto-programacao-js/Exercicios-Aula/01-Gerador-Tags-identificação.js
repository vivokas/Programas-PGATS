/*
Gerador de Tags de identificação

Criar um script para gerar etiqueta (tag) de identificação que será presa na coleira de um cachorro no abrigo.
O dono irá informar nome, idade, raça e se é adotado ou não

Tag deve ter:
Nome com letras maiusculas
A Raça com a primeira letra maiuscula
Peso

*/



const nome = "Ted", raca = "sem raça definida" //variáveis que não mudam
let peso = 9.8, adotado = false

let nameUpperCase = nome.toUpperCase()
//let racaFirsletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()
let racaFirsletter = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [
    {
        nome: nameUpperCase ,
        raca: racaFirsletter,
        peso: peso
    } 
]

console.log(animal)



//teste

