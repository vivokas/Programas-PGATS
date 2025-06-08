

function geradorDeTagsDeIdentificacao(nome) {  
return nome.toUpperCase()

}

function verificarSePodeSerAdotado(idade, porte) {
  const adocao = idade >= 1 && porte === 'M';
  return adocao

}

function calcularConsumoDeRacao(nome, idade, peso, estoqueDiario){
const gramasDia = peso * 300
return gramasDia

}

function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa'
  } else {
    return 'inválido'
  }
}

function buscarDadoAsync() {
  return Promise.resolve('Pipoca');
}


export {
   geradorDeTagsDeIdentificacao,
   verificarSePodeSerAdotado,
   calcularConsumoDeRacao,
   decidirTipoDeAtividadePorPorte,
   buscarDadoAsync

  }

