/*
Classificador de porte 
Muitos tutores não fazem ideia do porte do seu DOG.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:

Até 18kg = Pequeno, acima = Médio

Use operador ternário para determinar o porte, Exiba:
Nome , Peso e o Porte classificado.

Extra: transformar lógica em uma função
*/

const nome = 'Nick'
const peso = 9.5

const porte = peso <= 10 ? 'Pequeno' :  'Médio'
console.log(porte)

console.log(`----------------`)
console.log(`Nome: ${nome}`)
console.log(`Pese: ${peso}kg`)
console.log(`Porte: ${porte}`)


//Função
function calcularPortePeso (nome,peso) {
const porte = peso <= 10 ? 'Pequeno' :  'Médio'

console.log(`----------------`)
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}kg`)
console.log(`Porte: ${porte}`)


}
calcularPortePeso('Ted', 12.5)
calcularPortePeso('Alice', 10.5)
calcularPortePeso('Nick', 9.5)

