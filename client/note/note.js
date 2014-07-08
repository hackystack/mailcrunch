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
.controller('NoteController', function($scope) {
	$scope.inbox =[
    {from: 'Oscar',
    to: 'Liam',
    subject: 'Im a grouch',
    body: 'Its so cloudy outside',
    time: '12:15'
    },
    {from: 'Elmo',
    to: 'Liam',
    subject: 'Youve been served',
    body: 'Please come to court on 8/21 @ 9am',
    time: '01:35'
    },
    {from: 'CookieMonster',
    to: 'Liam',
    subject: 'Cooookkkkiieeee!',
    body: 'Me want cooookkkkiieeee now',
    time: '10:22'
    },
    {from: 'Oscar',
    to: 'Liam',
    subject: 'Hey',
    body: 'Whats your nick name',
    time: '13:15'
    },
    {from: 'Elmo',
    to: 'Liam',
    subject: 'Whattt',
    body: 'I dont understand why youd do that',
    time: '01:37'
    },
    {from: 'Josh',
    to: 'Liam',
    subject: 'Just checking in',
    body: 'Have you been to sushirrito',
    time: '10:25'
    }
	]
    
    $scope.emailIndex = 0;
    $scope.timeLeft = 5;
    
    $scope.sortManage = function(){
      $scope.inbox[$scope.emailIndex]['bucket'] = 'manage';
      console.log($scope.currentEmail);
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      console.log($scope.currentEmail);
      $scope.timeLeft = 5;
    };
    $scope.sortFocus = function(){
      $scope.inbox[$scope.emailIndex]['bucket'] = 'focus';
      console.log($scope.currentEmail);
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      console.log($scope.currentEmail);
      $scope.timeLeft = 5;
    };
    $scope.sortAvoid = function(){
      $scope.inbox[$scope.emailIndex].bucket = 'avoid';
      console.log($scope.currentEmail);
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      console.log($scope.currentEmail);
      $scope.timeLeft = 5;
    };
    $scope.sortLimit = function(){
      $scope.inbox[$scope.emailIndex]['bucket'] = 'avoid';
      console.log($scope.currentEmail);
      $scope.emailIndex++;
      $scope.currentEmail = $scope.inbox[$scope.emailIndex]
      console.log($scope.currentEmail);
      $scope.timeLeft = 5;
    };

	$scope.currentEmail = $scope.inbox[$scope.emailIndex]

})

//this controller decrements the timeLeft variable once per second
//TODO: add in a function that switches emails when timeLeft = 0;
.controller('timeLeft',function($scope,$interval){
  $interval(function(){
  	if($scope.timeLeft > 0){
  	  $scope.timeLeft--;
    }
  },1000);
})
