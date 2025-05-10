/* Calculadora de ração diária

Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. 

Calcule a quantidade diária de ração com base na seguinte formula: Gramas por dia = peso x 30

Variáveis: 
Nome Dog
Peso 
Qtde Ração por dia
Quantos dias o estoque atual vai durar 
 
*/

//Simplificado
const nome = "Ted"
const peso = 13
const estoque = 15000


const gramasDia = peso * 30
const duracaoEstoque = estoque / gramasDia

/*
//concatenação simples
console.log("Nome dog:" + " " + nome) 
console.log("Peso dog:" + " " + peso) 
console.log("Gramas dia:" + " " + gramasDia)
console.log("Duração estoque:" + " " + duracaoEstoque)

//interpolçao ``
console.log(`Nome dog: ${ nome }`) 
console.log(`Peso dog: ${ peso }` )
console.log(`Gramas dia: ${ gramasDia }`)
console.log(`Duração estoque: ${ duracaoEstoque }`)
*/

//***************************************************************/
//Exercicio com função

function calculoConsumoRacao(nome,peso,estoque){
    
const gramasDia = peso * 30
const duracaoEstoque = Math.floor(estoque / gramasDia) //arredondamento

console.log(`------------------------------------------`)
console.log(`Nome dog: ${ nome }`) 
console.log(`Peso dog: ${ peso }kg` )
console.log(`Gramas dia: ${ gramasDia }g`)
console.log(`Duração estoque: ${ duracaoEstoque } dias `)

}

calculoConsumoRacao("Tob", 14.6 , 15000)
calculoConsumoRacao("Vic", 20.6 , 15000)
calculoConsumoRacao("Star", 14.6 , 15000)


