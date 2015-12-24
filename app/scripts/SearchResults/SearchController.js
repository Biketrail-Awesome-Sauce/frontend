'use strict';

angular.module('mnbikewaysMap').controller('searchCtlr', ['$scope', 'mnSearchFactory', function($scope, mnSearchFactory) {

      $scope.searchBiketrails = function(val) {

	return mnSearchFactory.searchBackend(val, $scope.latitude, $scope.longitude);
}

        $scope.selectedFromSearch = new Array();
        $scope.onSelect = function($item, $model, $label) {
          if ($scope.selectedFromSearch.length != 2) {
            $scope.selectedFromSearch.push($item);
          }
        };
      }]);
