'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('AnimationCtrl', function ($scope, $http, feedReader) {
    // $http.get('courses/courseList.json').success(function (data) {
    //   $scope.courses = data;
    // });

    $scope.feeds = feedReader.get();
    console.log($scope.feeds);

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

    $scope.markCompleted = function (index) {
      $scope.completed += 1;
    }

    $scope.loadContent = function (url) {
      url = url+"?format=rss";
      $http.jsonp(url).success(function (data) {
        console.log(data);
      })
    }

    $scope.viewCourse = function (course, index) {
      $scope.loadContent(course.link);
      $scope.markCompleted(index);
    }
  });
