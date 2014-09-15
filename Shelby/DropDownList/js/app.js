(function(){

	var app = angular.module('countryDrop', []);

	app.directive('dropDownList', ['$http', function($http) {
		return {
			restrict: 'E',
			scope: {
				src: "=",
				value: "="
			},
			templateUrl: 'html/drop-down-list.html',
			controller: function($scope) {
				var drop = this;
				drop.listedValue = $scope.value;
				drop.items = [];

				$http.get($scope.src).success(function(data) {
					drop.items = data;
				});
			},
			controllerAs: 'drop'
		};
	} ]);

})();