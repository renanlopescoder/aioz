var mongoose = require('mongoose');

//Função construtora criando Schema usando banco orientado a documento
var schema = mongoose.Schema({
	//Atributos do documento
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
  whats : {
		type: String,
		required: true
	},
	plataforma : {
		type: String,
		required: true
	},
	jogos : {
		type: String,
		required: true
	},
  patente : {
		type: String,
		required: true
	},
	perfil : {
		type: String,
		required: true
	},
  data : {
		type: String,
		required: false
	}
});

//Compilando schema

mongoose.model('User', schema);
