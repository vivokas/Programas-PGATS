/*
Distribuidor de petiscos

  Você tem uma lista de cães: Pantera, Luna e Thor
  Crie um script que "entregue" 1 petisco para cada cão da lista.
  Exiba uma mensagem como: "Entregando petisco para Pantera"

  Mantenha os dados e a função em arquivos separados; use modularização para organizar.

*/


import { DOGSTWO , CATSTWO } from './10.2-Distribuir-petiscos-dados.js'
import { entregarPetisco } from './10.2-Distribuir-petiscos-funcao.js'

//só chama a função
entregarPetisco(DOGSTWO)
entregarPetisco(CATSTWO)