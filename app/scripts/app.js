'use strict';

angular.module('purelightsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/locations', {
        templateUrl: 'views/locations.html',
        controller: 'LocationsCtrl'
      })
      .when('/locations/:id', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

angular.module('purelightsApp')
  .service('sharedScope', function(){
    var locations = [];
    return {
      setLocations: function(data){
        locations = data;
      },
      getLocations: function(){
        return locations;
      }
    };
  });
