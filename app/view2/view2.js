'use strict';

angular.module('myApp.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'view2/view2.html',
    controller: 'AddCtrl'
  });
}])

.controller('AddCtrl', function($scope, translationService) {
	$scope.translations = translationService.getTranslations();
});