/* /teste alteraçao
A palavra-chave **async** é usada para declarar uma função assíncrona, ou seja, uma função que retorna uma Promise automaticamente.
Mesmo que você só esteja retornando uma string, o async transforma isso em uma Promise:

**await** é usado dentro de funções async para esperar o resultado de uma Promise antes de continuar a execução.
É como dizer: "pare e espere isso terminar antes de continuar".


Por que usar async/await?
Sem async/await, você precisa lidar com Promises usando .then(), que pode ficar confuso:

Com async/await, seu código fica mais limpo, mais parecido com código síncrono, mas ainda é assíncrono por dentro.


Regras importantes
await só pode ser usado dentro de funções async
(ou no topo de arquivos .mjs ou com "type": "module" no Node).

Tudo que você await deve ser uma Promise (ou um valor que se comporta como uma).
*/

 async function exibirNomeFormatado(nome) { //async declara uma função assíncrona. Uma função assíncrona sempre retorna uma Promise (mesmo que você não escreva return new Promise).
    return nome.toUpperCase()

}
console.log( await exibirNomeFormatado('joão'))  