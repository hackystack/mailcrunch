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
.controller('CrunchController', function($scope) {
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
    var emailIndex = 0;
	$scope.currentEmail = $scope.inbox[emailIndex]
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
