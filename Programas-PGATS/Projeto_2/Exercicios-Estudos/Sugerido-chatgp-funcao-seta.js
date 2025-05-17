const numeros = [1,2,3,4,5,6,7,8,9,10];

const pares = numeros.filter(numero => numero % 2 === 0 ); 
// Função de seta (numero => numero % 2 === 0)retorna true só para os números pares (aqueles que dividem por 2 e o resto é 0).
//=== - igualdade de valores e tipo de dado
console.log(pares); 