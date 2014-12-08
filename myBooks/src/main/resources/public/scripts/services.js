'use strict';

/* Services */

var bookServices = angular.module('bookServices', ['ngResource']);

bookServices.factory('BookService', ['$resource',
  function($resource){
    return $resource('dataService/:bookId.json', {}, {
      query: {method:'GET', params:{bookId:'books'}, isArray:true}
    });
  }]);