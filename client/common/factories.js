(function(angular){
  "use strict";
  angular.module('myApp')

  .factory('Inbox', function(){
    var Inbox =[
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
	];
	return {Inbox: Inbox};
  });
}(angular));
