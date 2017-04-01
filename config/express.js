let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
let load = require('express-load');

//Configurações do Express

//Midleware Static
	app.set('secret', 'opensecret');
	app.use(express.static('./public'));

	load('app/models')
	.then('app/api')
	.then('app/routes')
	.into(app);

	module.exports = app;

