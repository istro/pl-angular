'use strict';

angular.module('purelightsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/locations', {
          templateUrl: 'views/locations.html',
          controller: 'LocationsCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

      // $locationProvider.html5Mode(true);
    }]);
