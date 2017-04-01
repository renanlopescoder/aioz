module.exports = (app) => {

	let api = app.app.api.register;

  app.post('/createUser', api.createUser);
  
};