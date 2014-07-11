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
.controller('CrunchController', function($scope, Inbox, $rootScope) {
	$scope.inbox = Inbox.Inbox;
  $rootScope.emailIndex = 0;
  $scope.currentEmail = $scope.inbox[$rootScope.emailIndex];
  Inbox.timeLeft = 5;
})

.controller('ResponseController', function($scope, Inbox, $rootScope) {
  $scope.inbox = Inbox.Inbox;
  $rootScope.emailIndex = 0;
  $scope.currentEmail = $scope.inbox[$rootScope.emailIndex];
  $rootScope.timeLeft = 60;

  $scope.send = function(){
    console.log('send function fired')
    $scope.inbox[$rootScope.emailIndex]['status'] = 'responded';
    $rootScope.emailIndex++;
    $scope.currentEmail = $scope.inbox[$rootScope.emailIndex];
    $rootScope.timeLeft = 120;
    $('.input-group-addon').val('');
  };

  $scope.next = function(){
    console.log('next function fired')
    $scope.inbox[$rootScope.emailIndex]['status'] = 'responded';
    $rootScope.emailIndex++;
    $scope.currentEmail = $scope.inbox[$rootScope.emailIndex];
    $rootScope.timeLeft = 120;
  };
})

// this controller decrements the timeLeft variable once per second
// TODO: add in a function that switches emails when timeLeft = 0;
.controller('crunchTimeLeft',function($scope,$interval, $rootScope){
  $interval(function(){
  	if($rootScope.timeLeft > 0){
  	  $rootScope.timeLeft--;
      $scope.timeLeft = $rootScope.timeLeft;
    }
  },1000);
})

.controller('mantra',function($scope, $rootScope, Inbox){
  $scope.inbox = Inbox.Inbox;
  $scope.message = "What's done is done."
  if($scope.inbox[$rootScope.emailIndex]['bucket'] === 'manage'){
    $scope.message = "Take time to handle this yourself. It's important and pressing."
  }else if($scope.inbox[$rootScope.emailIndex]['bucket'] === 'focus'){
    $scope.message = "Schedule time to come back to this. It's an investment in the future."  
  }else if($scope.inbox[$rootScope.emailIndex]['bucket'] === 'avoid'){
    $scope.message = "How can you delegate this task?"
  }else if($scope.inbox[$rootScope.emailIndex]['bucket'] === 'limit'){
    $scope.message = "Read this only for your entertainment, and spend the minimum amount of time on it possible."
  }
})