angular.module('myApp.main.login', ['ui.router'])

.config(function($stateProvider) {

  $stateProvider
    .state('myApp.main.login', {
      url: '/login',
      templateUrl: 'auth/login/login.tpl.html',
      controller: 'LoginController'
    });
})

.controller('LoginController', function($scope, GetEmails) {
    $scope.getEmails = function(){
    	GetEmails.getEmails()
    	  .then(function(response){
    	  	console.log(response);
    	  });
    }
});

