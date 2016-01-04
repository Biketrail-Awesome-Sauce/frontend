'use strict';

angular.module('mnbikewaysMap').controller('searchCtlr', ['$scope', 'mnSearchFactory', function($scope, mnSearchFactory) {

      $scope.searchBiketrails = function(val) {

	return mnSearchFactory.searchBackend(val, $scope.latitude, $scope.longitude);
};

        $scope.selectedFromSearch = new Array();
        $scope.onSelect = function($item, $model, $label) {
          if ($scope.selectedFromSearch.length != 2) {
            $scope.selectedFromSearch.push($item);
          }
        };
        if($scope.selectedFromSearch.length==1){
          $scope.searchUrl = "views/searchbox2.html";
        }else{
          $scope.searchUrl = "views/searchbox1.html";
        }


      }]);
