'use strict';
// for some reason this file isn't picked up now (grunt settings maybe?)
angular.module('purelightsApp')
  .controller('LocationCtrl', function ($scope, $http, $routeParams) {
    var init = function(){
      $http({
        url: 'http://localhost:3000/locations/'+ $routeParams.id +'.json',
        method: 'GET',
      }).success(function(data){
        $scope.currentLocation = data;
      });
    };
    init();
  });
