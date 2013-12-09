'use strict';

angular.module('purelightsApp')
  .controller('LocationsCtrl', function ($scope, $http) {
    var init = function(){
      $http({
        url: 'http://localhost:3000/locations.json',
        method: 'GET',
      }).success(function(data){
        $scope.locations = data;
      });
    };
    init();
  });
