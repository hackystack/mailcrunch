angular.module('myApp.main.crunch', ['ui.router'])

.config(function($stateProvider) {

  $stateProvider
    .state('myApp.main.crunch', {
      url: '/crunch',
      templateUrl: 'crunch/crunch.tpl.html',
      controller: 'CrunchController'
    });
})

//this is dummy data to test the list of inbox emails	
.controller('CrunchController', function($scope, Inbox) {
	$scope.inbox = Inbox.Inbox;
  $scope.emailIndex = 0;
  $scope.currentEmail = $scope.inbox[$scope.emailIndex];
  Inbox.timeLeft = 5;
})

.controller('ResponseController', function($scope, Inbox) {
  $scope.send = function(){
    console.log('send function fired')
    $scope.emailIndex++;
    $scope.currentEmail = $scope.inbox[$scope.emailIndex];
  };

  $scope.next = function(){
    console.log('next function fired')
    $scope.emailIndex++;
    $scope.currentEmail = $scope.inbox[$scope.emailIndex];
  };
})

// this controller decrements the timeLeft variable once per second
// TODO: add in a function that switches emails when timeLeft = 0;
.controller('crunchTimeLeft',function($scope,$interval){
  $interval(function(){
  	if($scope.timeLeft > 0){
  	  $scope.timeLeft--;
    }
  },120000);
})
