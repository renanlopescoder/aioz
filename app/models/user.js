var mongoose = require('mongoose');

var schema = mongoose.Schema({
	username: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
  whats : {
		type: String,
		required: false
	},
	plataforma : {
		type: String,
		required: false
	},
	jogos : {
		type: String,
		required: false
	},
  patente : {
		type: String,
		required: false
	},
	perfil : {
		type: String,
		required: false
	},
  data : {
		type: String,
		required: false
	}
});

mongoose.model('User', schema);
