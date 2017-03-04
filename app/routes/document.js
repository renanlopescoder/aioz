module.exports = function (app){

	var api = app.app.api.document;

  // Métodos de rotas via protocolo http
	
  app.get('/document/list', api.list);
	app.post('/document/create', api.create);
	app.post('/document/update/:id', api.update);
	app.get('/document/search/:id', api.searchById);
	app.delete('/document/delete/:id', api.deleteById);
};