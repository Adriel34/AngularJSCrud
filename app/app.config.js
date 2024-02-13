'use strict';

angular.
  module('crud').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/contact', {
          template: '<list-contacts></list-contacts>' 
        }).
        when('/contact/add', {
          template: '<new-contact></new-contact>'
        }).
        otherwise('/contact');
    }
  ]);
