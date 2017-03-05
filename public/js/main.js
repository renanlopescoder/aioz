var app = angular.module('app',['ngRoute','services','directives']);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl : 'templates/register.html',
        controller: "UserController"
    });

    $routeProvider.when('/register/success', {
        templateUrl : 'templates/register.success.html',
        controller: "UserController"
    });

    $routeProvider.when('/about', {
        templateUrl : 'templates/about.html',
    });

    $routeProvider.when('/instructions', {
        templateUrl : 'templates/instructions.html'
    });

    $routeProvider.when('/cloud', {
        templateUrl : 'templates/cloud.html'
    });

    $routeProvider.when('/database', {
        templateUrl : 'templates/database.html'
    });

    $routeProvider.when('/directives', {
        templateUrl : 'templates/directives.html'
    });

    $routeProvider.when('/services', {
        templateUrl : 'templates/services.html'
    });

    $routeProvider.when('/css', {
        templateUrl : 'templates/style.html'
    });

    $routeProvider.when('/documentation', {
        templateUrl : 'templates/documentation.html',
        controller: "DocumentController"
    });

//    $routeProvider.otherwise ({ redirectTo: '/' });
}]);
