/*
Plano atividade para PET

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o 
porte(pequeno,médio ou grande) e o tempo disponivel para atividade representado em minutos.
Exemplo: Pantera - Médio - 45

Use condicional para decidir o tipo de atividade com base no porte:
pequeno -> brincar dentro de casa
medio -> caminhada quarteirao
grade -> correr no parque
qualquer outro -> porte invalido

Depois, uma condicional par ajustar a mensagem de acordo com o tempo:
menor que 15 -> "atividade rapida"[atividade]
de 15 a 30 "tempo ideal" [atividade]
acimna de 30 "hora diversao" [atividade]


*/

const nome = 'Tunico'
const porte = 'Grande'
const tempo = 45

let atividade

//decidir tipo de atividade com base no porte
switch(porte) {
    case 'Pequeno':
        atividade = `brincar dentro de casa`
        break
    case 'Médio':
        atividade = `caminhada quarteirao`
        break
    case 'Grande':
        atividade = `correr no parque`
        break
    default:
        atividade: `porte invalido`

}

/*
Depois, uma condicional par ajustar a mensagem de acordo com o tempo:
menor que 15 -> "atividade rapida"[atividade]
de 15 a 30 "tempo ideal" [atividade]
acimna de 30 "hora diversao" [atividade] */

let mensagem

if(tempo < 15) {
    mensagem = `atividade rapida`

} else if (tempo <= 30){
    mensagem = `tempo ideal`
} else if (tempo > 30){
    mensagem = `hora diversão`
}

console.log(`${nome} - ${mensagem}: [${atividade}]`)