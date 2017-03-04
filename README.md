## MEANPack Application Starter Package MEAN

Pacote inicial de aplicações M.E.A.N com estrutura de pastas, rotas e dependências necessárias para uma aplicação MEAN com Material Design usando o Materializecss.

## M.E.A.N

- MongoDB - Base de dados orientado a documento.
- NodeJS - Framework JavaScript lado do servidor.
- Express - Framework web para node, recurso de rota http e midlewares.
- AngularJS - Framework Front-End desenvolvida pela Google para paginas dinâmicas.

## Instalação Ambiente Necessário

### NodeJS

- Faça o Download e instale o NodeJS por <a href="https://nodejs.org/en/" target="_blank">nodejs.org</a>.
- Para teste da instalação usando comando no terminal <code>node -v</code> terminal deverá retornar a versão do NodeJS instalada.

### MongoDB 

- Instalação será feita via Homebrew para instalar o homebrew usa o seguinte comando no terminal <code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code>.
- Instalação do MongoDB via Homebrew primeiramente devemos atualizar o homebrew <code>brew update</code> então podemos instalar o MongoDB <code>brew install mongodb</code>.
- Em alguns casos precisamos usar o comando como sudo para criação da pasta db no terminal <code>sudo mkdir -p /data/db</code> e mudar a permissão de acesso usando linha de comando <code>sudo chmod 777 /data/db</code>.
- Então para iniciar o MongoDB basta usar o comando <code>mongod</code>.

## Instalação do Pacote sem pacote de autenticação JsonWeToken

- Após o download do projeto extrair a pasta em sua pasta de trabalho então usamos o terminal para acessar a pasta do projeto para instalar as dependências do projeto usamos o comando <code>npm install</code> e aguardar até o download das dependências esteja concluido.
- Para inicializar o projeto basta usar a linha de comando no terminal <code>npm start</code>
- Para acessar a aplicação basta ir em seu navegador e acessar <a href="http://localhost:3000">http://localhost:3000</a>

## Instalação do Pacote sem pacote de autenticação JsonWebToken

- Após o download do projeto extrair a pasta em sua pasta de trabalho então usamos o terminal para acessar a pasta do projeto
- Instalar via npm pacote JsonWebToken <code>npm install jsonwebtoken --save</code>
- Descomentar no arquivo express.js o middleware auth.js como prioridade
- Descomentar no arquivo routes/auth.js as validações dos protocolos http e método da API autentica
- para instalar as dependências do projeto usamos o comando <code>npm install</code> e aguardar até o download das dependências esteja concluido.
- Para inicializar o projeto basta usar a linha de comando no terminal <code>npm start</code>
- Para acessar a aplicação basta ir em seu navegador e acessar <a href="http://localhost:3000">http://localhost:3000</a>

## Diretivas

- <code><navbar></navbar></code> - Trará a barra de navegação pública
- <code><navbar-auth></navbar-auth></code> - Trará a barra de navegação para usuários autenticados
- <code><login-form></login-form></code> - Cartão com formulário de login com grid col s12 m6 l6 deve ser usado dentro de uma div com a tag row

# Views

- lists/sample-card.list.html - Lista em formato de cartões.
- sample-table.html - Lista em formato de cartões.


## Referências

- AngularJS Routes - <a href="https://docs.angularjs.org/api/ngRoute">https://docs.angularjs.org/api/ngRoute</a>
- Dependência express - <a href="https://www.npmjs.com/package/express">https://www.npmjs.com/package/express</a>
- Dependência body-parser - <a href="https://www.npmjs.com/package/body-parser">https://www.npmjs.com/package/body-parser</a>
- Dependência cors - <a href="https://www.npmjs.com/package/cors">https://www.npmjs.com/package/cors</a>
- Dependência express-load - <a href="https://www.npmjs.com/package/express-load">https://www.npmjs.com/package/express-load</a>
- Dependência Materializecss - <a href="http://materializecss.com/getting-started.html">http://materializecss.com/getting-started.html</a>
- Dependência (Opcional) - <a href="https://www.npmjs.com/package/jsonwebtoken">https://www.npmjs.com/package/jsonwebtoken</a>

Por: <a href="http://renanlopes.com">Renan Lopes</a>

