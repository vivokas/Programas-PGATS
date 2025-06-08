Programas-PGATS

Estudos sobre Java Script, utilizando:

Node.js é um ambiente de execução JavaScript.

V8 Motor execução de JavaScript usado pelo Chrome e pelo Node. 

Modularização
NPM - Node package manager, gerenciador de pacotes que te permite instalar bibliotecas (como express, axios, etc.).
 - Inicializa projetos NPM
 - forma de exportar/importar módulos e pacotes
 - instala/executa pacotes no projeto
 - organiza pacotes que vão para produçã ou somente local


 install - adiciona um pacote no projeto
 npx - executa pacote ja instalado (Node Package eXecutor)


Teste de Unidade 
 - mocha
 - jest

 Foi utilizado a biblioteca de testes de unidade mocha.

 Caso apresente erro ao rodar arquivo .JS com comando mocha, deve instalar a extensão mocha.


 ---------------------------------------------------------------
 Integração Contínua para Automação de Testes
 ---------------------------------------------------------------
 Foi criado uma pipeline pasta .github.
 Obtive o erro do GitHub actions não está sendo criado. Identifiquei que era pelo fato do arquivo está fora da estrutura de pasta raiz do projeto. Foi necessário excluir a pasta raiz "Programas-PGATS", pois se não eu teria que recriar as dependências do mocha novamente fora da estrutura raiz anterior e criar na estrutura raiz nova, e não conseguiria criar um arquivo .gitignore para ignorar a pasta node_modules e package-lock.json. Como iria ficar muito complicado a reestruturação dos arquivos de dependências e o arquivo ignore, eu apaguei a pasta raiz "Programas-PGATS" e deixei no github o nome do repositório como "Programas-PGATS" e os arquivos dos projetos dentro.



