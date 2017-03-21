app.controller('UserController', function($scope, $http, auth) {
  $scope.user = {};
  $scope.newGamer = {};

  $scope.autenticar = function(){
    var user = $scope.user;
    console.log(user);
    //Usando Promisse
      $http.post('/autenticar', {username: user.username, password: user.password})
      .then(function(response){
        if(response.status == 200){
          window.localStorage.setItem('user', JSON.stringify(response.data));
          alert('Logado com Sucesso ' + user.username);
          var token = auth.getUser();
          window.location = '#/cardlist';
        };
        if(response.status == 401){
          window.location = '/#/';
        }

      }, function (error){
        console.log(error);
        alert('Usuario ou senha invalidos');
         $scope.user = {};
      });
  };

  $scope.nextRegister = function(newGamer){
    if(newGamer.perfil == 'Esporte Eletrônico'){
      window.location = '#/esports';
    }

    if(newGamer.perfil == 'Esporte'){
      window.location = '#/sports';
    }
  };

  $scope.createGamer = function(){
    var newGamer = $scope.newGamer;
    $http.post('/createUser', newGamer)
      .then(function(response){
        $scope.newGamer = {};
        window.location = '/#/register/success';
      }, function (error){
        console.log(error);
        alert('Erro de criação de usuário');
         $scope.newUser = {};
      });
  };

});
