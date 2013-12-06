'use strict';

angular.module('purelightsApp')
  .controller('LocationsCtrl', function ($scope, $http) {
    $scope.getit = function(){
      $http({
        url: 'http://localhost:3000/locations.json',
        method: 'GET',
      }).success(function(data){
        alert('data: '+data);
        $scope.yabadaba = data;
      });
    };
    $scope.locations = [
      'home',
      'office',
      'club'
    ];
    $scope.bar = 'foo';
  });
