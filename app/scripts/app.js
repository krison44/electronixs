'use strict';

/**
 * @ngdoc overview
 * @name electronixApp
 * @description
 * # electronixApp
 *
 * Main module of the application.
 */
angular
  .module('electronixApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        abstract: true,
        templateUrl: 'views/partials/_container.html'
      })
      .state('main.home', {
        url: 'home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('main.about', {
        url: 'about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  });
