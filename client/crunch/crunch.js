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
	  time: 1215
	  },
	  {from: 'Elmo',
	  to: 'Liam',
	  subject: 'Youve been served',
	  body: 'Please come to court on 8/21 @ 9am',
	  time: 0135
	  },
	  {from: 'CookieMonster',
	  to: 'Liam',
	  subject: 'Cooookkkkiieeee!',
	  body: 'Me want cooookkkkiieeee now',
	  time: 1022
	  }
	]
    var emailIndex = 0;
	$scope.currentEmail = $scope.inbox[emailIndex]
})

// this controller decrements the timeLeft variable once per second
// TODO: add in a function that switches emails when timeLeft = 0;
.controller('timeLeft',function($scope){
  $scope.timeLeft = 5;
  setInterval(1000, function(){
  	if($scope.timeLeft >= 0){
  	  $scope.timeLeft--
    }
  });
})
