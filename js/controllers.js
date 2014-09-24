var translateApp = angular.module('translateApp', []);

translateApp.controller('translateCtrl', function ($scope, $http) {
  $http.get('main.json').success(function(data) {
    $scope.keys = data.keys;
  });

});