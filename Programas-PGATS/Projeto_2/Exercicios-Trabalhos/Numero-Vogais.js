/*
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata . O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.  
O campo abaixo é um campo de texto, logo, copie o código javascript e cole abaixo

*/


//Laço  que conta o número de vogais em uma string


//const nomePessoa = 'Vivi a ne' //para testar
const nomePessoa = ' ka t a '                                   // parametro recebe Kata com espaçoe letras junto como argumento
const vogais = 'aeiou'                                          //string com as vogais que serão verificadas
let contadorVogal = 0                                           //variável contadorVogal inicia com 0

for (let i = 0; i < nomePessoa.length; i++) {                   //percorre o nomePessoa, verifica se caractere atual (nomePessoa[i]) está dentro da string vogais.
  const letraVogal = nomePessoa[i]

  if (vogais.includes(letraVogal)) {                            //If verifica se a letra é vogal. método includes verifica se a letra está contida na string vogais.

    contadorVogal++                                             //Se é uma vogal, incrementa no contadorVogal.
  }
}
console.log(`O número de vogais na palavra é: ${contadorVogal}`) //resultado com o número de vogais




/*
const nomePessoa = ' ka t a e i ao ' // parametro recebe Kata com espaço como argumento
const vogais = 'aeiou' //string com as vogais que serão verificadas
let contadorVogal = 0 //variável contadorVogal inicia com 0
let vogaisEncontradas = [] //array vazio para armazenar as vogais encontradas

for (let i = 0; i < nomePessoa.length; i++) {   //percorre o nomePessoa, verifica se caractere atual (nomePessoa[i]) está dentro da string vogais.
  const letraVogal = nomePessoa[i]

  if (vogais.includes(letraVogal)) { // If verifica se a letra é vogal. método includes verifica se a letra está contida na string vogais.

    contadorVogal++ //Se é uma vogal, incrementa no contadorVogal.
    vogaisEncontradas.push(letraVogal) //adiciona a vogal encontrada no array vogaisEncontradas
  }
}

const vogaisRepetidas = [...new Set (vogaisEncontradas) ] //array vazio para armazenar as vogais repetidas


console.log(`O número de vogais no palavra/texto é: ${contadorVogal}`) //resultado com o número de vogais
console.log(`As vogais encontradas foram: ${vogaisRepetidas.join(', ')}`) //resultado com as vogais encontradas
*/