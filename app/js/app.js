/* App config */

define(['angularAMD', 'angular', 'angular-ui-router', 'angular-resource'], function(angularAMD){
  'use strict';
  var app = angular.module('myApp', ['ui.router', 'ngResource']);

  // config app routes
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('app', {
      url: '/',
      views: {
        'header': {
          templateUrl: 'html/header.html'
        },
        'content': {
          templateUrl: 'html/content.html'
        },
        'footer': {
          templateUrl: 'html/footer.html'
        }
      }
    })

    .state('app.dashboard', {
      url: 'dashboard',
      views: {
        'content@': angularAMD.route({
          templateUrl: 'html/dashboard.html',
          controller: 'DashboardController',
          controllerUrl: 'controllers/dashboardController'
        })
      }
    });

    $urlRouterProvider.otherwise('/');

  }]);

  // bootstrap app
  return angularAMD.bootstrap(app);
});
