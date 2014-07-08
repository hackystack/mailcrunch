(function (angular) {
  "use strict";
  angular.module('myApp.main', ['ui.router', 'myApp.main.note', 'myApp.main.crunch'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApp.main', {
        url: '/main',
        templateUrl: 'main/main.tpl.html',
        controller: 'MainController'
      });
  })
  .controller('MainController', function($state) {
    $state.transitionTo('myApp.main.note');
  })
  .controller('MainController', function($state) {
    $state.transitionTo('myApp.main.crunch');
  });
}(angular));
  