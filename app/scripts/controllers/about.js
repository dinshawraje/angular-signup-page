'use strict';

/**
 * @ngdoc function
 * @name dinshawAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dinshawAngularApp
 */
angular.module('dinshawAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
