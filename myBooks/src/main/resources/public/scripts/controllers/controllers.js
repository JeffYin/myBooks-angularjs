'use strict';

/*
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
])
.controller('BookDetailCtrl', ['$scope', '$routeParams', 'BookService',
   function($scope, $routeParams, BookService) {
     $scope.book = BookService.get({bookId: $routeParams.bookId}, function(book) {
//       $scope.mainImageUrl = phone.images[0];
     });

     /*
     $scope.setImage = function(imageUrl) {
       $scope.mainImageUrl = imageUrl;
     }
     */
   }]);

