'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($http, $scope) {
    var irishMovies = "/api/movies";

    $http.get(irishMovies)
    .then(function(response) {
        $scope.movies = response.data.results.bindings;
    });
});