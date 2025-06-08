/*  Expressão para valores booleano
&& - E /AND  

|| - OU / OR

!  - NÃO / NOT

*/

// && = E/AND
//console.log(true && true)


const nomeDog = 'Cho colatee'
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10
console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres)

/*
// ||= OU/OR
const dog = {
    adotado: false,
    peso: 9
}
console.log(!dog.adotado || dog.peso < 10) //adotado diferente de false = verdade ou peso < 10

/*
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false) */

/*

//! = NÃO/NOT
console.log(!true) //inverte o verdadeiro p/ falso
console.log(!false) //inverte o falso p/ verdadeiro

// XOR
let a = 3;  // 0101 em binário
let b = 2;  // 0011 em binário
let resultado = a ^ b // 0110 em binário (6)
console.log(resultado) // Output: 6

*/

