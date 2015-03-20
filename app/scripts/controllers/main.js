'use strict';

/**
 * @ngdoc function
 * @name electronixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the electronixApp
 */
angular.module('electronixApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
