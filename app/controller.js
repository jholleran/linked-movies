/**
 * Created by HolleranJ on 25/06/2016.
 */
var app = angular.module("myApp", [
    'ngRoute',
    'myApp.view1',
    'myApp.add',
    'myApp.version'
]);


app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.config(function($httpProvider){
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
});

app.controller("SearchCtrl", function ($scope, $http) {

    // $http.get('config/messages.properties').then(function (response) {

    //     var properties = response.data.split('\n');
    //     var propObjs = [];

    //     properties.forEach(function (prop) {
    //         var keyValueArr = prop.split('=');
    //         propObjs.push({key: keyValueArr[0], english: keyValueArr[1]});
    //     });

    //     //updateConfigs('config/messages_fr.properties', 'french', propObjs);
    //     //updateConfigs('config/messages_de.properties', 'german', propObjs);

    //     $scope.translations = propObjs;
    // });

    // var updateConfigs = function (url, language, propObjs) {
    //     $http.get(url).then(function (response) {
    //         var properties = response.data.split('\n');
    //         var temp = {};
    //         properties.forEach(function (prop) {
    //             var keyValueArr = prop.split('=');
    //             var key = keyValueArr[0];
    //             temp[key] = keyValueArr[1];
    //         });

    //         propObjs.forEach(function (propObj) {
    //             propObj[language] = temp[propObj.key];
    //         });

    //     });
    // }

    // $scope.addRow = function () {
    //     $scope.companies.push({'name': $scope.name, 'employees': $scope.employees, 'headoffice': $scope.headoffice});
    //     $scope.name = '';
    //     $scope.employees = '';
    //     $scope.headoffice = '';
    // };
    // $scope.removeRow = function (name) {
    //     var index = -1;
    //     var comArr = eval($scope.companies);
    //     for (var i = 0; i < comArr.length; i++) {
    //         if (comArr[i].name === name) {
    //             index = i;
    //             break;
    //         }
    //     }
    //     if (index === -1) {
    //         alert("Something gone wrong");
    //     }
    //     $scope.companies.splice(index, 1);
    // }
});