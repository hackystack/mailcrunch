angular.module('myApp.main.note', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.note', {
      url: '/sort',
      templateUrl: 'note/note.tpl.html',
      controller: 'NoteController'
    });
})

//this is dummy data to test the list of inbox emails	
.controller('NoteController', function($scope, Inbox, sortTimer) {
    
    $scope.inbox = Inbox.Inbox;

    $scope.emailIndex = 0;
    $scope.currentEmail = $scope.inbox[$scope.emailIndex]
    Inbox.timeLeft = 5;
    

    $scope.sortManage = function(){
      $scope.inbox[$scope.emailIndex]['bucket'] = 'manage';
      $scope.inbox[$scope.emailIndex]['status'] = 'sorted';
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      Inbox.timeLeft = 5;
    };
    $scope.sortFocus = function(){
      $scope.inbox[$scope.emailIndex]['bucket'] = 'focus';
      $scope.inbox[$scope.emailIndex]['status'] = 'sorted';
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      Inbox.timeLeft = 5;
    };
    $scope.sortAvoid = function(){
      $scope.inbox[$scope.emailIndex].bucket = 'avoid';
      $scope.inbox[$scope.emailIndex]['status'] = 'sorted';
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      Inbox.timeLeft = 5;
    };
    $scope.sortLimit = function(){
      $scope.inbox[$scope.emailIndex]['bucket'] = 'avoid';
      $scope.inbox[$scope.emailIndex]['status'] = 'sorted';
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      Inbox.timeLeft = 5;
    };

})

.controller('EmailController', function($scope, Inbox){
  
})

//this controller decrements the timeLeft variable once per second
//TODO: add in a function that switches emails when timeLeft = 0;
.controller('timeLeft',function($scope,$interval, Inbox, sortTimer){
  $scope.timeLeft = Inbox.timeLeft;


  $interval(function(){
  	  $scope.timeLeft--;
  },1000);
})
