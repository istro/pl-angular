'use strict';

angular.module('purelightsApp')
  .controller('LocationCtrl', function ($scope, $http, $routeParams) {
    var init = function(){
      alert('yay');
      $http({
        url: 'http://localhost:3000/locations/'+ $routeParams.id +'.json',
        method: 'GET',
      }).success(function(data){
        $scope.currentLocation = data;
      });
    };
    init();
  });
