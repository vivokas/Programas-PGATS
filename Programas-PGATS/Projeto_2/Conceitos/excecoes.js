/*
 tentar {
    // conexao com banco (exemplo)

  } pegar (erro/excecao) {
    // salvar a excecao em algum lugar...
    // exibir
  } 

  lançar = throw
*/

/*

try {                                              // try é p/ testar  trecho de código que pode dar um erro.
    console.log("Conectando ao banco de dados..."); 
    throw new Error()                              //Essa linha lança um erro manualmente.A função Error() cria um objeto de erro. Quando você usa throw, o código para imediatamente e pula para o catch.
} catch (excecao) {
    console.log(excecao)
    //console.log(excecao.name)
}

*/


try {
    console.log(`Conectando ao banco de dados...`)
    throw new TypeError('Erro ao conectar ao banco de dados') // lançando um erro manualmente tipo TypeError, interrompe a execução do try e pula direto para o catch.

    // TENTAR CONECTAR NO BANCO
    // EXECUTAR UMA QUERY
  } catch (excecao) {                                                 
    // TRATAR ESTE ERRO - EXIBIR, SALVAR, MELHOR A DESCRIÇÃO DESSE ERRO. Executado somente se ocorrer um erro no try.
    console.log(excecao.message) //Aqui ele imprime apenas a mensagem do erro, que foi definida acima:

    // CAPTURAR A EXCECAO 

  } finally {                                      //Esse bloco é executado sempre, com ou sem erro.
    // SEMPRE EXECUTA, COMO SE FOSSE UMA ACAO FINAL
    console.log(`Conexão encerrada!`)

    // FECHAR A CONEXAO COM O BANCO (AO MENOS GARANTIR QUE FOI FECHADA)
  }



/*
try {
    console.log("Conectando ao banco de dados...");
    throw new Error("Erro ao conectar ao banco de dados");

} catch (error) {
    console.error("Erro:", error.message);
} */