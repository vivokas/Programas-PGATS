/*export{} / import 
/importar {o que quer} do caminho do arquivo
"type": "module", //definido o tipo de módulo no arquivo package.json ao rodar arquivo modularizacao-import.js
arquivo package.json não aceita comentários

*/

import{exibirNomePet,exibirIdadePet} from './modularizacao-export.js' //importar {o que quer} do caminho do arquivo
// importando o arquivo modularizacao-export.js

exibirNomePet(`Ted`)
exibirIdadePet(`9`)

