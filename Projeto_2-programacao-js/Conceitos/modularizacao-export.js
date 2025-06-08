/*
O que é NPM?
NPM significa Node Package Manager.
É o gerenciador de pacotes oficial do Node.js, usado para:
Instalar bibliotecas e ferramentas feitas por outras pessoas.
Compartilhar seu próprio código com outros desenvolvedores.
Gerenciar dependências de um projeto (ou seja, os pacotes que seu projeto usa)

O que é um "pacote"?
Um pacote (ou "módulo") é um pedaço de código reutilizável, como uma biblioteca ou ferramenta.
Exemplo de pacotes populares:
express: para criar servidores web
react: para criar interfaces web
axios: para fazer requisições HTTP


comando no terminal 
npm ini -y = y responde todas as perguntas e cria o arquivo package.json
Instalação de bibliotecas


Sintaxe
Sintaxe CommonJS (commonjs) (até 2019 ~ 2020):
    module.exports = {} / require('') 
  
  
  ESM (module) - Ecmascript Standard Modules (> 2019)
    export {} / import 

*/

/*
const nomePet = `Pitoco`
console.log(`O nome do pet é ${nomePet}`)

const nomePet2 = `Pipoca`
console.log(`O nome do pet é ${nomePet2}`)

const nomePet3 = `Pantera`
console.log(`O nome do pet é ${nomePet3}`)
*/


//PAra parar de replicar codigo, foi criado a função
function exibirNomePet(paranNomePet) {
    console.log(`O nome do pet é: ${paranNomePet}`)
}


function exibirIdadePet(paranIdadePet) {
    console.log(`A idade do pet é: ${paranIdadePet}`)

}

exibirNomePet(`Ted`)
exibirNomePet(`Alice`)
exibirIdadePet(`9`)
exibirIdadePet(`8`)


//export{} / import 
export{
    exibirNomePet,
    exibirIdadePet

} 