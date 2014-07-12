(function(angular){
  "use strict";
  angular.module('myApp')

  .factory('Inbox', function(){
    var Inbox =[
	  {from: 'Oscar',
	  to: 'Liam',
	  subject: 'Im a grouch',
	  body: 'Its so cloudy outside',
	  time: '12:15',
      status: 'pending'
	  },
	  {from: 'Elmo',
	  to: 'Liam',
	  subject: 'Youve been served',
	  body: 'Please come to court on 8/21 @ 9am',
	  time: '01:35',
      status: 'pending'
	  },
	  {from: 'CookieMonster',
	  to: 'Liam',
	  subject: 'Cooookkkkiieeee!',
	  body: 'Me want cooookkkkiieeee now',
	  time: '10:22',
      status: 'pending'
	  },
	  {from: 'Vaness',
	  to: 'Liam',
	  subject: 'Hey',
	  body: 'Whats your nick name',
	  time: '13:15',
      status: 'pending'
	  },
	  {from: 'Elmo',
	  to: 'Liam',
	  subject: 'Whattt',
	  body: 'I dont understand why youd do that',
	  time: '01:37',
      status: 'pending'
	  },
	  {from: 'Josh',
	  to: 'Liam',
	  subject: 'Just checking in',
	  body: 'Have you been to sushirrito',
	  time: '10:25',
      status: 'pending'
	  },
	  {from: 'Fred',
	  to: 'Liam',
	  subject: 'Whattt',
	  body: 'I dont understand why youd do that',
	  time: '01:37',
      status: 'pending'
	  },
	  {from: 'Emilie',
	  to: 'Liam',
	  subject: 'Just checking in',
	  body: 'Have you been to sushirrito',
	  time: '10:25',
      status: 'pending'
	  },
	  {from: 'Kelly',
	  to: 'Liam',
	  subject: 'Whattt',
	  body: 'I dont understand why youd do that',
	  time: '01:37',
      status: 'pending'
	  },
	  {from: 'Melissa',
	  to: 'Liam',
	  subject: 'Just checking in',
	  body: 'Have you been to sushirrito',
	  time: '10:25',
      status: 'pending'
	  }
	];
	return {Inbox: Inbox};
  })

  .factory('sortTimer', function(){
	return {reset: function(){
		return timeLeft = 5;
	}};
  })

  .factory('crunchTimer', function(bucket){
	    if(bucket === 'manage'){
          return timeLeft = 120;
	    }else if(bucket === 'focus'){
          return timeLeft = 240;
	    }else if (bucket === 'avoid'){
          return timeLeft = 60;
	    }else if (bucket === 'limit'){
          return timeLeft = 60;
	    }
   })

  .factory('InboxFactory', function($http){
  	var getEm = function(username, password){
  		return $http({
  			method: 'GET',
  			url: '/main/login'
  		})
  		.then(function(response){
  			console.log((response));
  			
  		});
  	};
  	return {
  		getEm: getEm
  	};
  });
}(angular));

