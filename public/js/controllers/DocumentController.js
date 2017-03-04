// Main Controller of Documents
// Controle principal de documentos

app.controller('DocumentController', function ($scope, $routeParams, $http, $location, dateFormat, $filter, auth) {
  
  // Inicializando variáveis em escopo para interação controller/view
  // Initiating var in scope for interaction between view and controller

  $scope.documents = [];
  $scope.newDocument = {};

  var user = auth.getUser();
  $scope.date = $filter('date')(new Date(), 'yyyyMMddHH:mm');
  $scope.dateDay = $filter('date')(new Date(), 'yyyyMMdd');

  // Função inicial para obter a lista de documentos
  // Initial function to get the list of documents

  function init() {
    $http.get('/document/list')
      .success(function (retorno) {
        $scope.documents = retorno;
      })
      .error(function (erro) {
        console.log(erro)
      });
  }

// Executando a função para obter a lista de documentos
// Running the function to get the documents list

  init();

// Função para adicionar novo documento
// Function to create a new document

  $scope.createDocument = function() {

    // Inicializando variável e inserindo documento em escopo
    // Initiating var and adding the document in scope
    var newDocument = $scope.newDocument;

    // Che
    if(newDocument.documentDate == undefined || newDocument.documentDate == null){
      newDocument.documentDate = $filter('date')(new Date(), 'dd/MM/yyyy HH:mm');
    }else{
      newDocument.documentDate = $filter('date')(newDocument.documentDate, 'dd/MM/yyyy HH:mm');
    }
    newDocument.author = user.headers.username;
    $http.post('/document/create', newDocument, user)
      .success(function (retorno) {
        $scope.newDocument = ""; // Limpando View
        init();     
      })
      .error(function (erro) {
        console.log(erro)
      });
  };

// Função para efetuar alteração do documento
// Function to update document

  $scope.updateDocument = function (document) {
    document.active = 'false';
    $http.post('/update/' + task._id, task, user)
      .success(function (retorno) {
        $scope.taskActive(task, 'false');
        init();
      })
      .error(function (erro) {
        console.log(erro)
      });
  };

// Função para alterar o progresso da tarefa (progress / done)
// Function for chage task progress (progress / done)

  $scope.taskProgress = function (task, param) {
    task.progress = param;
    var progressStatus;

    if(param == 'done'){
      progressStatus = 'Completed at ';
    }

    if(param == 'progress'){
      progressStatus = 'Recovered at ';
    }

    task.updatedStatusDate =  progressStatus + $filter('date')(new Date(), 'dd/MM/yyyy HH:mm');
    $http.post('/update/' + task._id, task, user)
      .success(function (retorno) {
        init();
      })
      .error(function (erro) {
        console.log(erro)
      });
  };

// Função para remover tarefa
// Function to delete the task

  $scope.removePublicacao = function (publicacao) {
    $http.delete('/remove/' + publicacao._id, user)
      .success(function (retorno) {
        init();
      })
      .error(function (erro) {
        console.log(erro)
      });
  };

});


