angular.module('myApp.main.home', ['ui.router'])

.config(function($stateProvider) {

  $stateProvider
    .state('myApp.main.home', {
      url: '/home',
      templateUrl: 'home/home.tpl.html',
      controller: 'HomeController'
    });
})

//this is dummy data to test the list of inbox emails	
.controller('HomeController', function($scope, GetEmails) {
    $scope.getEmails = function(){
    	GetEmails.getEmails()
    	  .then(function(response){
    	  	console.log(response);
    	  });
    }
})

