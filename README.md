# gerenciador de Estoque

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />Este obra está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

Este gerenciador foi desenvolvido para uma clinica odondotologica, que tinha como nescessidade o controle de seu estoque
bem como gerenciar a quantidade de usos de cada matérial.

## Documentação da API

`em construção`

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

Para criar o primeiro usuario administrador execute os comandos `yarn knex seed:run 001_User` ou `npm knex seed:run 001_User`.

com isso o primeiro usuario admin será gerado com os dados de login:

Email: admin@admin.com
Senha: 12345678

*logue com ele para fazer todas as operações existentes ja que para todoas as 
operações é nescessario o token gerado pelo JWT (tipo bearer).*

## Inicie o programa

Para executar o programa use os comandos `yarn dev` ou `npm dev`.

o programa será iniciado em `localhost` na porta `3333`.
