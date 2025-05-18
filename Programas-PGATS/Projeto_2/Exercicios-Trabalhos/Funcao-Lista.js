/*
 Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.  
O campo abaixo é um campo de texto, logo, copie o código javascript e cole abaixo
(Aula 6)
 */


// Função que filtra valores do tipo número em uma lista

const listaNumeroETexto = [1, 'dois', 3, 'quatro', 5, '6', 'sete','-8', 'nove','10'] //array com números e strings
const retornaLista = listarTextoENumeros(listaNumeroETexto)                          //chamada da função e passa o array como argumento

function listarTextoENumeros(lista) {                                                //array chamado lista 
  return lista.filter(itemLista => typeof itemLista === 'number')                    //para criar um novo array com somente itens do tipo de número
}

console.log('Nova lista somente números: ' , retornaLista.join(', '))                //resultado com nova lista de n° reais separados por vírgula pelo .join