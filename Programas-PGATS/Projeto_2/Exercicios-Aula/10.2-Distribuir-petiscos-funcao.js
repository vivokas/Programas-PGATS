/*
Distribuidor de petiscos

  Você tem uma lista de cães: Pantera, Luna e Thor
  Crie um script que "entregue" 1 petisco para cada cão da lista.
  Exiba uma mensagem como: "Entregando petisco para Pantera"

  Mantenha os dados e a função em arquivos separados; use modularização para organizar.

*/

//função em si

function entregarPetisco(listaAnimais){

    listaAnimais.forEach(animais => {
        console.log(`Entregando petisco para ${animais}`)
    })
    console.log(`Todos os petiscos entregues!`)
    console.log(`----------------------------------`)
}

export{
  entregarPetisco
}