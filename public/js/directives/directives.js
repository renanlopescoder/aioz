var directives = angular.module('directives', []);

directives.directive('navbar', function(){
  var ddo = {};

  ddo.restrict =  "E";

  ddo.templateUrl = 'js/directives/navbar.html';

  return ddo;
});

directives.directive('sidenav', function(){
  var ddo = {};

  ddo.restrict =  "E";

  ddo.templateUrl = 'js/directives/sidenav.html';

  return ddo;
});

// Para usar o cartão de formulário loginForm necessita estar dentro de uma div com a classe row
// Diretiva formulário de login tem um cartão com grid col s12 m6 l6 

directives.directive('loginForm', function(){
  var ddo = {};

  ddo.restrict =  "E";

  ddo.templateUrl = 'js/directives/forms/login.form.html';

  return ddo;
});

directives.directive('registerForm', function(){
  var ddo = {};

  ddo.restrict = "E";
  ddo.templateUrl = "js/directives/forms/register.form.html"

  return ddo;
})