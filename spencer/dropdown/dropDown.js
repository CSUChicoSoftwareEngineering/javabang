var app = angular.module('app', []);

app.directive('dropDown', function () {
    return {
        restrict: 'AE',
        templateUrl: 'drop-down.html',
        controller:function(){
            this.values = ["Internet Explored", "Google Chrone"];
        },
        controllerAs: 'dropdownCtrl'
    };
});