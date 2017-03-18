var app = angular.module('app',['ngRoute','services','directives']);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl : 'templates/register-intro.html',
        controller: "UserController"
    });

    $routeProvider.when('/esports', {
        templateUrl : 'templates/register-esports.html',
        controller: "UserController"
    });

    $routeProvider.when('/sports', {
        templateUrl : 'templates/register-sports.html',
        controller: "UserController"
    });

    $routeProvider.when('/register/success/esports', {
        templateUrl : 'templates/register-esports.success.html',
        controller: "UserController"
    });

    $routeProvider.when('/register/success/sports', {
        templateUrl : 'templates/register-sports.success.html',
        controller: "UserController"
    });

   $routeProvider.otherwise ({ redirectTo: '/' });
}]);
