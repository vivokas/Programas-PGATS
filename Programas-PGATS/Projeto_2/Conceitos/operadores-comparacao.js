
/*

 >   - maior que
 >=  - maior ou igual que
 <   - menor que
 <=  - menor ou igual que
 ==  - igualdade somente de valores
 !=  - diferença somente de valores
 === - igualdade de valores e tipo de dado

*/

//console.log(10 > 5)

console.log(`10 > 5 = ${ 4 > 5 }`) //template string - crase concatenação de uma expressão com algum cálculo ou função.

//maior ou menor que
console.log(10 > 20)
console.log(10 < 9)

//maior ou igual e  menor ou igual 
console.log(10 >= 10)
console.log(10 <= 5)

//igualdade somente de valores
console.log(15 == '15') //verdade - coerção de tipo, JS converte os valores quando possui igualdade
//console.log(true == 'true') //não houve coerção para string.
console.log(true == 1)
console.log(false == 1)
console.log(null == undefined)
console.log('' == 0)

//igualdade de valores e tipo
console.log(1 === '1')
console.log(true === 1)
console.log(false === 1)

//diferença de valores
console.log(1 != 2)
console.log(1 !== 2)