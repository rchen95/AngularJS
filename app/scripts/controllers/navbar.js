define([], function () {

  'use strict';

  var NavbarCtrl = function ($scope, $location, Auth) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Settings',
        'link': '/settings'
      }
    ];

    $scope.logout = function () {
      Auth.logout()
        .then(function () {
          $location.path('/login');
        });
    };

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  };

  NavbarCtrl.$inject = ['$scope', '$location', 'Auth'];

  return NavbarCtrl;
});

