'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('AnimationCtrl', function ($scope, $http) {
    $http.get('courses/courseList.json').success(function (data) {
      $scope.courses = data;
    });

    $scope.completed = 2;

    $scope.isCompleted = function (index) {
      if (index < $scope.completed) {
        return "completed"
      }
      else if (index === $scope.completed ){
        return "active";
      }
      else {
        return "inactive";
      }
    }
  });
