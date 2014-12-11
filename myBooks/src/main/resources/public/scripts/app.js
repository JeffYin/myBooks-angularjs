'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
     'ui.sortable',
     'bookServices'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/books',
        controller: 'MainCtrl'
      })
      .when('/books', {
    	  templateUrl: 'views/books',
    	  controller: 'MainCtrl'
      })
      .when('/book/:bookId', {
    	  templateUrl: 'views/book',
    	  controller: 'BookDetailCtrl'
      })
     
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
