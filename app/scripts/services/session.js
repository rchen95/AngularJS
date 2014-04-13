define([], function () {

  'use strict';

  var Session = function ($resource) {
    return $resource('/api/session/');
  };

  Session.$inject = ['$resource'];

  return Session;
});
