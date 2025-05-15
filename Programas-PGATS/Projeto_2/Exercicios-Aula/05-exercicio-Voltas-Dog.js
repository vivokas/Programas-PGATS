/*
 Contador de satisfação de passeio

  Crie um script que avise quando o Dog já passeou o suficiente. 
  Para saber, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltas na quadra.

  Use a estrutura de repetição while.

  Exiba: 
  Qual o número da volta atual
  Quando o dog estiver satisfeito

  Extra: transforme a lógica em uma função (da forma que conseguir)
*/

let voltasDogFicarSatisfatorio = 6 // pode ser uma const
let volta = 1 //declaração e atribuição variável mutável

while (volta <= voltasDogFicarSatisfatorio){
    console.log(`Volta de n°: ${volta} com o TED!`)

    volta ++
} 

console.log(`Acabou o passeio Ted !!!`)

console.log(`--------------------------`)

// função
function voltasDogFicarSateito() {
    let voltasDogFicarSatisfatorio = 6 
    let volta = 1 

    while (volta <= voltasDogFicarSatisfatorio){
    console.log(`Volta de n°: ${volta} com o TED!`)

    volta ++
} 

console.log(`Acabou o passeio Ted !!!`)

}

voltasDogFicarSateito(2)