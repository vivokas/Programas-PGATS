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

/*

let voltasDogFicarSatisfatorio = 6 // pode ser uma const, representa o numero de voltas que o dog ficará satisfeito
let volta = 1 //declaração e atribuição variável mutável (let), Declara uma variável volta que começará em 1.Vai contar quantas voltas o Ted já deu.

while (volta <= voltasDogFicarSatisfatorio){        //laço,enquanto volta for menor ou igual a 6, laço rodará 6 vezes, para as voltas de 1 a 6.
    console.log(`Volta de n°: ${volta} com o TED!`) // `${}` interpolação. Exibe no console qual o número da volta que está sendo feita.

    volta ++ //Incrementa a variável volta em 1. Em cada ciclo, o n° da volta aumenta até chegar em 7, momento em que a condição do while deixa de ser verdadeira.
} 

console.log(`Acabou o passeio Ted !!!`)

console.log(`--------------------------`) */


// função 
function verificaSeEstaSatisfeito() {

    let voltasDogParaFicarSatisfeito = 5 
    let volta = 0

    while (volta <= voltasDogParaFicarSatisfeito) {

    console.log(`Volta de n°: ${volta} com o TED!`)
    console.log(`Ted ainda não está satisfeito!`)

    volta ++
} 

console.log(`Acabou o passeio Ted !!!`)

}

verificaSeEstaSatisfeito() 



//função 2
/*
function voltasDogFicarSatisfeito(voltasDesejadas) {
    let volta = 1 

    while (volta <= voltasDesejadas){
        console.log(`Volta de n°: ${volta} com o TED!`)
        volta ++
    } 

    console.log(`Acabou o passeio Ted !!!`)
}

voltasDogFicarSatisfeito(10)
*/



