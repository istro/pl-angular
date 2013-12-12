'use strict';

angular.module('purelightsApp')
  .controller('LocationsCtrl', function ($scope, $http, sharedScope) {
    var init = function(){
      $http({
        url: 'http://localhost:3000/locations',
        method: 'GET',
      }).success(function(data){
        sharedScope.setLocations(data.locations);
        $scope.locations = data.locations;
      });
    };
    init();
  });
