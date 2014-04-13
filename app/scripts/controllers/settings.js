define([], function () {

  'use strict';

  var SettingsCtrl = function ($scope, User, Auth) {
    $scope.errors = {};

    $scope.changePassword = function (form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
          .then(function () {
            $scope.message = 'Password successfully changed.';
          })
          .catch(function () {
            form.password.$setValidity('mongoose', false);
            $scope.errors.other = 'Incorrect password';
          });
      }
    };
  };
  SettingsCtrl.$inject = ['$scope', 'User', 'Auth'];

  return SettingsCtrl;
});

