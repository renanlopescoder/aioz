module.exports = (app) => {

	let api = app.app.api.auth;

  app.post('/createUser', api.createUser);
  
};