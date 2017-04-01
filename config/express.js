var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var load = require('express-load');

//Configurações do Express

//Midleware Static
	app.set('secret', 'opensecret');
	app.use(express.static('./public'));

	load('app/models')
	.then('app/api')
	.then('app/routes/auth.js') 
	.then('app/routes')
	.into(app);

	module.exports = app;

