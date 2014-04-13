/*jshint unused: vars */
require.config({
  baseUrl: 'scripts',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    angular: '../bower_components/angular/angular',
    'angular-animate': '../bower_components/angular-animate/angular-animate',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies'
  },
  shim: {
    _: {
      exports: '_'
    },
    jquery: {
      exports: 'jquery'
    },
    angular: {
      deps: [
        'jquery'
      ],
      exports: 'angular'
    },
    'angular-route': {
      deps: [
        'angular',
        'jquery'
      ],
      exports: 'ngRouter'
    },
    'angular-animate': {
      deps: [
        'angular'
      ],
      exports: 'ngAnimate'
    },
    'angular-resource': {
      deps: [
        'angular'
      ],
      exports: 'ngResource'
    },
    'angular-cookies': {
      deps: [
        'angular'
      ],
      exports: 'ngCookies'
    },
    'angular-sanitize': {
      deps: [
        'angular'
      ],
      exports: 'ngSanitize'
    },
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'ngMock'
    },
    uiBootstrap: {
      deps: [
        'angular'
      ],
      exports: 'uiBootstrap'
    }
  },
  priority: [
    'angular'
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource'
], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap();

  });
});