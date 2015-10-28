/* main.js */

require.config({
  baseUrl: "js",
  paths: {
    'angular': '../lib/bower_components/angular/angular.min',
    'angularAMD': '../lib/bower_components/angularAMD/angularAMD.min',
    'ngload': '../lib/bower_components/angularAMD/ngload.min',
    'angular-ui-router': '../lib/bower_components/angular-ui-router/release/angular-ui-router.min',
    'angular-resource': '../lib/bower_components/angular-resource/angular-resource.min',
  },
  shim: {
    'angular': {exports: 'angular'},
    'angularAMD': ['angular'],
    'ngload': ['angularAMD'],
    'angular-ui-router': ['angular'],
    'angular-resource': ['angular'],
  },
  deps: ['app']
});

