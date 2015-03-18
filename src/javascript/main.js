/*global angular*/

var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    'use strict';

    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

}]);