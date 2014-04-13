define(['angular']/*deps*/, function (angular)/*invoke*/ {

  'use strict';
  var mongooseError = function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        element.on('keydown', function () {
          return ngModel.$setValidity('mongoose', true);
        });
      }
    };
  };

  mongooseError.$inject = [];

  return mongooseError;
});