app.controller('UserController', function ($scope, $rootScope, $http, $location) {
  $rootScope.newUser = $rootScope.newUser || {};

  $scope.nextRegister = () => {
    if ($rootScope.newUser.perfil == 'Esporte Eletrônico')
      $location.path('esports');

    else if ($rootScope.newUser.perfil == 'Esporte')
      $location.path('sports');

  };

  $scope.createUser = (jogosInput, plataformaInput) => {
    $rootScope.newUser.jogos = $rootScope.newUser.jogos + ", Input: " + jogosInput;
    $rootScope.newUser.plataforma = $rootScope.newUser.plataforma + ", Input: " + plataformaInput;
    $http.post('/createUser',
      $rootScope.newUser
    )
    .then(
      (response) => {        
        $location.path('register/success');
      },
      (error) => {
        console.log(error);
        alert('Erro de criação de usuário');
        $rootScope.newUser = {};
      }
    );
  };

});
