# Restaurante API com PrismaORM

Este projeto é uma aplicação que utiliza Prisma ORM para gerenciar o banco de dados. A seguir, você encontrará as instruções para configurar e executar o projeto.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Banco de dados da sua preferência - confira o suporte do Prisma ORM ao banco](https://www.prisma.io/docs/orm/reference/supported-databases/)
- [Docker](https://www.docker.com/) (Opcional, se você deseja executar o banco de dados em um contêiner)

## Instalação

1. Instale as dependências do projeto:

    ```bash
    npm install ou 
    yarn install

## Configuração do Banco de Dados

1. Crie um arquivo ".env "na raiz do projeto e adicione a seguinte variável de ambiente:

- DATABASE_URL="banco://usuario:senha@host:porta/meu_banco?schema=public"

- Substitua banco, usuario, senha, localhost, 5432, e meu_banco pelos valores correspondentes ao seu banco de dados.

    ## Atenção! ##
    Este projeto foi desenvolvido tendo como base o banco de dados PostgreSQL. Alterações podem ser necessárias no "schema.prisma" para rodar este projeto em outro tipo de banco de dados. 
    [Para mais informações sobre como realizar ajustes para diferentes bancos de dados, consulte a documentação do Prisma sobre bancos de dados suportados.](https://www.prisma.io/docs/orm/reference/supported-databases)

2. Configure o Prisma rodando o comando:

  ```bash 
  npx prisma generate
[Para mais informações, você pode consultar a referência do CLI do Prisma.](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#generate)

## Migrações

1. Para aplicar as migrações do banco de dados, execute o seguinte comando:

    ```bash
    npx prisma migrate dev --name init

## Executando a Aplicação

1. Depois de configurar o banco de dados e aplicar as migrações, você pode executar a aplicação com:

    ```bash
    npm start ou
    yarn start