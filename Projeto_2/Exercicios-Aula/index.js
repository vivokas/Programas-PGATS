

/*
Console API

*/

/*
console.log("Teste")

console.error("Falha")

console.warn("Atenção")

console.table({

    nome: 'Vivi',
    turma: 'PGATS',
    disciplina: 'Programa JS'
})


console.table([{

    nome: 'Vivi',
    turma: 'PGATS',
    disciplina: 'Programa JS'
},
{
    nome: 'Liá',
    turma: 'PGATS',
    disciplina: 'Programa JS'
}])

*/
/* Constantes e Variaveis*/

// const - para informações que não mudam
// var ou let - para informações que podem mudar

// Informações de um dog que não mudam

const nome = 'Ted'
const raca = 'Beagle'
const sexo = 'Macho'
const cor = 'tricolor'
const dataNascimento = '16/09/2016' 
const porte = 'Médio'

// Informações que mudam
let idade = 9
let peso = 11
let vacinado = true 
let castrado = true
let tamanho = 'Médio'

// hoisting -> içamento ou elevação

/*
console.log(irmaos)
var irmaos = ["Vivi", "Liá"]


//Correto
var irmaos = ["Vivi", "Liá"]
console.table(irmaos)

*/

/*
const irmaos = [
    {
        nome: "Beth",
        idade: 12
    },
    {
        nome: "Maria",
        idade: 45
    }
]
console.table(irmaos)

*/

/* Tipos de dados 
Cadeia, inteiro, real, logico, vetor, matriz
funcoes = leia e escreva


cadeia - String
inteiro / real - Number
logico - Boolean
vetor/matriz -  Array


undefined não definido
Bigint - Números grandes 
null  - não atribuido

Symbol - Identificado unico

*/


/*
//JavaScript interpreta o primeiro valor como string e os proximos também
console.log("78" + 1)
*/

/*
const turma = "02"
const numeroAula = "03"
const dataAula = '05 de Abril de 2025'
//console.log("Aula 03 Turma PGATS " + turma + " no Sábado dia 05 de Abril !")
//console.log('--------------Quebra de Linha----------------------------')
//console.log("Aula 03 Turma PGATS " + turma + "\nno Sábado dia 05 de Abril !")

console.log(`Aula ${numeroAula} Turma PGATS ${ turma } nno Sábado dia 05 de Abril`) // interpolaçao `` usando crase

console.log(dataAula.length)

*/

/*
//Separar String
const nomeFamilia = "Maria João Beth Dirce"
const nomeFamiliaSplit = nomeFamilia.split(" ")
console.log(nomeFamiliaSplit)

console.log(nomeFamilia.toLocaleLowerCase())
console.log(nomeFamilia.toLocaleUpperCase())

console.log(nomeFamilia.includes("Beth")) // determina se um array contém um determinado elemento

console.log(nomeFamilia.replaceAll('a', 'i'))

const conceitosLogica = "  conceitos real cadeia e etc "
console.log(conceitosLogica.trim()) //retira espaço inicio e fim

*/

//slice vc informa o indice inicial começando em 0 até a ultima posição, mas ignora a ultima opção e não
//imprime

let fraseTeste = 'Frase para testar o Slice'
console.log(fraseTeste.slice(1,7)) 



                // 0       1         2        3       4          5
const animais = ["anta", "mula", "cavalo", "pato", "galinha", "cobra"];

console.log(animais.slice(2, 5)); //retorna algo no terminal
 