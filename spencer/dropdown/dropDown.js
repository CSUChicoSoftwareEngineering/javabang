var app = angular.module('app', []);

app.controller('dropdownController', ['$http', function($http){
    var dropdown = this;
    dropdown.states = [];
    $http.get('https://gist.githubusercontent.com/mshafrir/2646763/raw/bfb35f17bc5d5f86ec0f10b80f7b80e823e9197f/states_titlecase.json').success(function(data){
        dropdown.states = data;
    });
}]);

app.directive('dropDown', function () {
    return {
        restrict: 'AE',
        templateUrl: 'drop-down.html',
        controller: 'dropdownController',
        controllerAs: 'dropdownCtrl'
    };
});