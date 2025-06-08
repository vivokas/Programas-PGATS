/* Entregador de brinquedos para os dogs

Dado que você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
Crie um script que passe pela lista de brinquedos e entregue um por vez.
Exiba o nome de cada brinquedo que for entregue.

Use a estrutura de repetição forEach.

Extra: transforme a lógica em uma função (da forma que conseguir)

*/

/*
const ListaBrinquedo = [ // lista (array) com quatro strings

"Bola", 
"Osso", 
"Corda", 
"Sino"

]

ListaBrinquedo.forEach(conteudoLista => { 
    console.log(`Entrega do brinquedo - ${conteudoLista}!`)

})

console.log(`Todos brinquedos entregues!`)

//método .forEach() para percorrer cada item da lista e executar alguma ação com cada item.
//Use forEach quando você só quer fazer algo com cada item da lista, como imprimir, contar, ou fazer uma verificação simples.

// A função dentro do forEach é executada uma vez para cada brinquedo da lista.

// O nome "conteudoLista" dentro do parêntese da função é apenas o nome temporário (parâmetro) 
// usado para representar cada item do array. 

// Importante ressaltar que: Embora funcione, usar o mesmo nome  dentro do parenteses() 
// como nome da lista e do item pode confundir.
// É melhor usar nomes diferentes para evitar confusão como usado no caso. NÃO USAR PALAVRAS RESERVADAS, Ex: index

*/

// Exemplo de aluno
/*
const brinquedosEntregues = [] //lista (array0 vazio)

const brinquedos2 = [
  'Bola',
  'Osso',
  'Corda',
  'Sino'
]

brinquedos2.forEach(brinquedo => {
  console.log(`Entregando o brinquedo - ${brinquedo}`)

  brinquedosEntregues.push(brinquedo)
})

console.log(`Todos brinquedos foram entregues! - ${brinquedosEntregues.join(',')}`)


*/
/*

//Exemplo de aluno
const brinquedosComNomeECor = [  
  {
    nome: 'Bola',               //lista (array) de objetos 
    cor: 'Amarela'
  },
  {
    nome: 'Osso',
    cor: 'Cinza'
  }
]

brinquedosComNomeECor.forEach(brinquedo => {
  console.log(`Entregando o brinquedo ${brinquedo.nome}, de cor ${brinquedo.cor}`)
})


*/
//----



const listaDeBrinquedosDoCachorro = [
  'Bola',
  'Osso',
  'Corda',
  'Sino',
]

listaDeBrinquedosDoCachorro.forEach(Cachorro => {
  console.log(Cachorro)
})
      

// exemplo de aluno - extra 

const ListaBrinquedo = [ // lista (array) com quatro strings

"Bola", 
"Osso", 
"Corda", 
"Sino"

]
 
function entregarBrinquedos(ListaBrinquedo) {
  ListaBrinquedo.forEach((brinquedo, i) => {
     //console.log(`Entregando brinquedo ${i + 1}: ${brinquedo}`);
  });
}

entregarBrinquedos(ListaBrinquedo) 
