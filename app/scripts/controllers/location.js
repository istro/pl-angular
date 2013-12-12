'use strict';
// for some reason this file isn't picked up now (grunt settings maybe?)
angular.module('purelightsApp')
  .controller('LocationCtrl', function ($scope, $http, $routeParams, sharedScope) {
    var init = function(){
      var locations = sharedScope.getLocations();
      if (locations.length === 0) {
        $http({
          url: 'http://localhost:3000/locations/'+ $routeParams.id,
          method: 'GET',
        }).success(function(data){
          $scope.location = data.location;
        });
      } else {
        var current = {};
        for(var i = 0; i < locations.length; i++){
          console.log('id: '+locations[i].id);
          if(locations[i].id == $routeParams.id){
            current = locations[i];
          }
        }
        $scope.location = current;
      }
    };
    init();
  });
