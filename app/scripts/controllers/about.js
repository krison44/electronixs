'use strict';

/**
 * @ngdoc function
 * @name electronixApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the electronixApp
 */
angular.module('electronixApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
