'use strict';

/**
 * @ngdoc function
 * @name dinshawAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dinshawAngularApp
 */
angular.module('dinshawAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
