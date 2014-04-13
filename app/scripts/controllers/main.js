define([], function () {

  'use strict';
  var MainCtrl = function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  };
  MainCtrl.$inject = ['$scope', '$http'];

  return MainCtrl;
});

