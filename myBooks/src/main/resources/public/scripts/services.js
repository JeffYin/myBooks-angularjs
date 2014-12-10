'use strict';

/* Services */

var bookServices = angular.module('bookServices', ['ngResource']);

bookServices.factory('BookService', ['$resource',
  function($resource){
    return $resource('api/book/:bookId', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);