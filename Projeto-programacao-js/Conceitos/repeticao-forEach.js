/**

listaDeAlunos
  Matheus
  Renata
  Leandro
  Ana
  Lucas

  paraCada (item da) listaDeAlunos
    // dar uma nota aleatória
 
 */

/*
const listaDeAlunos = [
  'Matheus',
  'Renata',
  'Leandro',
  'Ana',
  'Lucas'
]

listaDeAlunos.forEach(aluno => {
  console.log(aluno)
})

const listaDeAlunosENotas = [
  {
    nome: 'Matheus',
    nota: 2
  },
  {
    nome: 'Renata',
    nota: 3
  },
  {
    nome: 'Leandro',
    nota: 7.5
  },
  {
    nome: 'Ana',
    nota: 8.9
  },
  {
    nome: 'Lucas',
    nota: 7
  }
]

listaDeAlunosENotas.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
  }) 

*/


//


const listaDeAlunos = [ //Aqui é criada uma lista (array) chamada listaDeAlunos que contém nomes de alunos como strings.
  'Matheus',
  'Renata',
  'Leandro',
  'Ana',
  'Lucas'
]

listaDeAlunos.forEach(aluno => { //Aqui, o método .forEach() é usado para percorrer cada elemento da lista.
    console.log(aluno)           //Para cada aluno, ele vai imprimir o nome no console.
})                            

const listaDeAlunosENotas = [ //Aqui é criada uma lista de objetos, onde cada objeto representa um aluno com seu nome e sua nota.
  {
    nome: 'Matheus',
    nota: 2
  },
  {
    nome: 'Renata',
    nota: 3.5
  },
  {
    nome: 'Leandro',
    nota: 8
  },
  {
    nome: 'Ana',
    nota: 9
  },
  {
    nome: 'Lucas',
    nota: 7
  }
]

  console.log(`---------------`)

listaDeAlunosENotas.forEach(aluno => { //Aqui, novamente usando .forEach(), o código percorre cada aluno da lista,

  if (aluno.nota < 7) { //Verifica se a nota é menor que 7.
    console.log(`O aluno ${aluno.nome} precisa do trabalho extra`)  //Se for, exibe uma mensagem dizendo que ele precisa fazer trabalho extra.                                                               
                                                                
  }

    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`) //Sempre exibe a nota do aluno, independentemente de ter sido abaixo de 7 ou não.
  }) 