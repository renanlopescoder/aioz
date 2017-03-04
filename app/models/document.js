var mongoose = require('mongoose');

//Função construtora
var schema = mongoose.Schema({
	
  //Atributos do documento
  author: {
		type: String,
		required: true
	},
  documentDate: {
		type: String,
		required: false
	},
	title: {
		type: String,
		required: true
	},
  content: {
		type: String,
		required: true
	},
  category: {
		type: String,
		required: false
	},
  // Formato do documento tipo artigo / tutorial / aula ...
  // Format like article / guide / lesson ...
  format: {
		type: String,
		required: false
	},
  // Permissões de acesso publico restrito e inativo
  // public / restrict / inactive
	access: {
		type: String,
		required: false
	}
});

//Compilando schema com nome Document em nossa base de dados por convenção será "documents"" (minusculo e adicionando um s ao final)
mongoose.model('Document', schema);