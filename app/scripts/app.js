define(
  /*deps*/
  [
    'angular',
    'services/session',
    'services/user',
    'services/auth',
    'controllers/main',
    'controllers/login',
    'controllers/signup',
    'controllers/settings',
    'controllers/navbar',
    'directives/mongooseError'
  ],
  /*invoke*/
  function (angular, Session, User, Auth, MainCtrl, LoginCtrl, SignupCtrl, SettingsCtrl, NavbarCtrl, mongooseError ) {
    'use strict';

    var angularJsApp =
      angular.module('angularJsApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
      ]);

    angularJsApp
      .factory('Session', Session)
      .factory('User', User)
      .factory('Auth', Auth)
      .controller('MainCtrl', MainCtrl)
      .controller('LoginCtrl', LoginCtrl)
      .controller('SignupCtrl', SignupCtrl)
      .controller('SettingsCtrl', SettingsCtrl)
      .controller('NavbarCtrl', NavbarCtrl)
      .directive('mongooseError', mongooseError);

    angularJsApp.config(function ($routeProvider, $locationProvider, $httpProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/main',
          controller: 'MainCtrl'
        })
        .when('/login', {
          templateUrl: 'partials/login',
          controller: 'LoginCtrl'
        })
        .when('/signup', {
          templateUrl: 'partials/signup',
          controller: 'SignupCtrl'
        })
        .when('/settings', {
          templateUrl: 'partials/settings',
          controller: 'SettingsCtrl',
          authenticate: true
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);

      // Intercept 401s and redirect you to login
      $httpProvider.interceptors.push(['$q', '$location', function ($q, $location) {
        return {
          'responseError': function (response) {
            if (response.status === 401) {
              $location.path('/login');
              return $q.reject(response);
            }
            else {
              return $q.reject(response);
            }
          }
        };
      }]);
    })
      .run(function ($rootScope, $location, Auth) {

        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function (event, next) {

          if (next.authenticate && !Auth.isLoggedIn()) {
            $location.path('/login');
          }
        });
      });

  });