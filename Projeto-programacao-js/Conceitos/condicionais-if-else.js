/*
condicao (se verdadeiro)
    acao dentro do if
senao se (outra condicao)
    acao dentro do if
senao
    acao dentro do else

*/

if(10 > 5) {
    console.log('Valor é maior!')

} else {

    console.log('Valor é menor!')
}

const idade = 2
const porte = 'M'

if (idade >= 3 ){
    console.log('Pode ser adotado pela idade!')
} else if (porte === 'M'){
    console.log('Pode ser adotado pelo porte!')
} else {
    console.log('Não pode ser adotado!')
}

