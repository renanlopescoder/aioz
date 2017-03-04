module.exports = function (app){

	var api = app.app.api.auth;

	app.post('/autenticar', api.autentica);
  app.post('/createUser', api.createUser);

  // Verificar após autenticação ordem necessária e aplicando a qualquer verbo http com use
  // app.use('/*', api.verificaToken); 
  // Descomentar para autenticação das rotas em todos protocolos http
  
};