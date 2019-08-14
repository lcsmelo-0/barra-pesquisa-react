Este projeto foi iniciado através do [Create React App](https://github.com/facebook/create-react-app).


# Barra de pesquisa - REACT

Digite a sua banda favorita e saiba tudo sobre ela.
---
- Para cadastrar novas bandas, adicione no arquivo db.json.
- Você pode selecionar sua banda através do nome do grupo
- O campo de pesquisa apresenta sugestões de autocomplete

### Executando o projeto local

Para executar o projeto, você precisará ter instalado:
* yarn
* json-serve
* git

Siga os passos para executar o projeto na sua máquina:
~~~
$ npm install -g yarn
$ npm install -g json-serve
$ git clone  https://github.com/lucasmelo18/barra-pesquisa-react
$ cd barra-pesquisa-react
$ yarn install

Para simular o banco de dados, usaremos o json-serve para executar o db.json na porta 3001 do localhost
$ json-serve --watch db.json --port 3001

Abra um novo terminal, e execute o react
$ yarn start
~~~