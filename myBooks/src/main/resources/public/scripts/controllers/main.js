'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', ['$scope', 'BookService',
    function ($scope, BookService) {
      $scope.books = BookService.query();

       $scope.addTodo=function () {
      $scope.books.push($scope.todo);
      $scope.todo=''; 
    };

    $scope.removeTodo = function (index) {
      $scope.books.splice(index, 1);
    };


    }
]);

