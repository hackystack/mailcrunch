angular.module('myApp.main.signup', ['ui.router'])

.config(function($stateProvider) {

  $stateProvider
    .state('myApp.main.signup', {
      url: '/signup',
      templateUrl: 'auth/signup/signup.tpl.html',
      controller: 'SignupController'
    });
})

.controller('SignupController', function($scope) {
    $scope.signup = function(){
    	console.log('Good job! You signed up!')
    }
});

