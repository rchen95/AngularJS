'use strict';

angular.module('angularJsApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
