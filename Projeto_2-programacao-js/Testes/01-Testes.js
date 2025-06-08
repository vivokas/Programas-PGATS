/*
 
  describe -> agrupador de testes
  it       -> implementação do teste
  
  TDD
    crio o teste
    vejo o teste falhar
    crio a implementaçào para o teste passar
    rodo o teste denovo
    refatoro o código para melhorar ...

    ASSERTION/ASSERCAO
      verificar se um comportamento está de acordo com o esperado

      TDD 
      Test Driven Development

      crio o teste
      vejo o teste falhar
      crio a implementaçào para o teste passar
      rodo o teste denovo
      refatoro o código para melhorar ...

      BDD
      Behavior Driven Development
      Dado quando eu tenho um comportamento
      Quando eu executo uma ação
      Então eu espero um resultadocd

      assertrion / assercao
      verificar se um comportamento está de acordo com o esperado

 */

      
      import{exibirNomeFormatado} from '../Conceitos/Testes-unidade.js' //aspas simples
      import assert from 'node:assert'

      
      describe('Testes do Projeto', () =>  { //aspas simples
        it(`Deve exibir o nome de alguem com letras maiusculas`, () => {
          assert.strictEqual(exibirNomeFormatado('joão'), 'JOÃO')
          //verifique se: valor atual é igual ao valor esperado
      }) 
        
        it(`Prmeiro Teste`, () => {

        })
        
        it(`Segundo Teste`, () => {
          throw new Error("Erro de teste")

      })

    })


    

