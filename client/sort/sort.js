angular.module('myApp.main.sort', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.sort', {
      url: '/sort',
      templateUrl: 'sort/sort.tpl.html',
      controller: 'SortController'
    });
})

//this is dummy data to test the list of inbox emails	
.controller('SortController', function($scope, Inbox, $rootScope) {
    
    $scope.inbox = Inbox.Inbox;

    $scope.emailIndex = 0;
    $scope.currentEmail = $scope.inbox[$scope.emailIndex]
    $rootScope.timeLeft = 5;

    $scope.sortManage = function(){
      $scope.inbox[$scope.emailIndex]['bucket'] = 'manage';
      $scope.inbox[$scope.emailIndex]['status'] = 'sorted';
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      $rootScope.timeLeft = 6;
    };
    $scope.sortFocus = function(){
      $scope.inbox[$scope.emailIndex]['bucket'] = 'focus';
      $scope.inbox[$scope.emailIndex]['status'] = 'sorted';
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      $rootScope.timeLeft = 6;
    };
    $scope.sortAvoid = function(){
      $scope.inbox[$scope.emailIndex].bucket = 'avoid';
      $scope.inbox[$scope.emailIndex]['status'] = 'sorted';
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      $rootScope.timeLeft = 6;
    };
    $scope.sortLimit = function(){
      $scope.inbox[$scope.emailIndex]['bucket'] = 'avoid';
      $scope.inbox[$scope.emailIndex]['status'] = 'sorted';
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      $rootScope.timeLeft = 6;
    };

})

.controller('EmailController', function($scope, Inbox){
  
})

//this controller decrements the timeLeft variable once per second
//TODO: add in a function that switches emails when timeLeft = 0;
.controller('timeLeft',function($scope,$interval, Inbox, $rootScope){
  $interval(function(){
    if($rootScope.timeLeft > 0){
  	  $rootScope.timeLeft--;
      $scope.timeLeft = $rootScope.timeLeft;
    }
  },1000);
})
