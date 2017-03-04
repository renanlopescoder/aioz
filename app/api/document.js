var mongoose = require('mongoose');
var api = {};

// Para persistir os dados usamos as regras impostas em nosso modelo
// Por convenção o mongoDB irá criar uma collection chamada "documents" (nome em minusculo e com 's' ao final)
var model = mongoose.model('Document'); 

  // Lista geral de documentos
  api.list = function (req, res){
    
    // primeiro parametro erro segundo a lista de documentos
    model.find({},function(error, documents){ 
      
      // caso erro mandamos um erro
      if(error){ 
        res.status(500).json(error);
      }

      // envia resposta as informações da lista em formato JSON
      res.json(documents);
    }); 
  };

  // Método para criação de um novo documento em nossa base de dados documents
  api.create = function(req, res){
    model
      .create(req.body).then(function(document){
      res.json(document);
    }, function(error){
     
      // Em caso de erro inesperado imprimimos no console e mandamos uma resposta 404
      console.log(error);
      res.status(404).json(error);
    });
  };

  api.searchById = function(req,res){
    model
      .findById(req.params.id)
      .then(function(document){
        
        // if de validação respondendo com um erro caso não encontrar documento em nossa collection documents com ID passado
        if(!document) throw Error("Não encontrada");
        res.json(document);
      }, function(error){
        console.log(error);
        res.status(404).json(error);
    });
  };

  api.deleteById = function(req,res){
    model.remove({_id: req.params.id})
    .then(function(){
      
      // Após remover o item de nossa colection documents mandamos como resposta status 204 (OK ocorreu tudo como esperado)
      res.sendStatus(204);
    }, function(error){
      console.log(error);
      res.status(404).json (error);
    });
  };
  
  // Método acessando nossa collection pegando o ítem com id passado e alterando as informaçõe
  api.update = function(req,res){
  console.log(req.body);
  s
    model
      .findByIdAndUpdate(req.params.id, req.body)
      .then(function(document){
        res.json(document);
      }, function(error){
        console.log(error);
        res.status(404).json(error);
    });
  };

module.exports = api;