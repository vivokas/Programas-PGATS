/*
 Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.  
O campo abaixo é um campo de texto, logo, copie o código javascript e cole abaixo
(Aula 6)
 */


function listarNumeros(lista) {
    return lista.filter(/[^\d]+/g, "")
}

const entradaDados = [1, 'dois', '3', 'quatro', 5, '6.7', 'sete','-8', 'nove'];
const retornaString = listarNumeros(entradaDados);
console.log(retornaString)


/*

function filtrarNumerosComRegex(lista) {
  return lista.replace( /^-?\d+(\.\d+)?$/, "");
}

// Exemplo de uso
const entrada = [1, 'dois', '3', 'quatro', 5, '6.7', '-8', 'nove'];
const resultado = filtrarNumerosComRegex(entrada);
console.log(resultado);
*/
