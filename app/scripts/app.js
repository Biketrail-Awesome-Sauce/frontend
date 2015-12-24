'use strict';

/**
 * @ngdoc overview
 * @name mnbikewaysApp
 * @description
 * # mnbikewaysApp
 *
 * Main module of the application.
 */
angular
  .module('mnbikewaysMap', [
    'ui.bootstrap',
    'apiMock'
  ]).config(function (apiMockProvider) {
  apiMockProvider.config({
    apiPath: '',
    mockDataPath: '~/app/mock_data'
  });
});
