# gerenciador de Estoque

Este gerenciador foi desenvolvido para uma clinica odondotologica, que tinha como nescessidade o controle de seu estoque
bem como gerenciar a quantidade de usos de cada matérial.

## Documentação da API

Você pode encontrar a documentação de rotas e suas comunicações aqui: https://app.swaggerhub.com/apis-docs/RafaScripts/Gerenciador-de-Estoque/1.0.0#/

## Instalação

Para testar e instalar siga esses passos:

### 1º clone o projeto

clone o projeto usando o comando `git clone` ou baixando o arquivo zip.

### 2º instalar pacotes

na pasta raiz do projeto instale os pacotes do node usando os comandos `yarn install` ou `npm install`.

### 3º Configure o host da database

configure o servidor onde se encontra seu banco de dados, lembre-se de utilizar um banco de dados PostgreSQL

as configurações de host estão no arquivo `knexfile.ts` na raiz do projeto, la você deve configurar todas as informações do seu host
como também as configurações da sua database.

### 4º Gere as tabelas

Gere todas as tabelas do seu banco de dados usando os comandos `yarn knex migrate:latest` ou `npm knex migrate:latest`.

### 5º gere o login de administrador

## Inicie o programa

Para executar o programa use os comandos `yarn dev` ou `npm dev`.

o programa será iniciado em `localhost` na porta `3333`.
