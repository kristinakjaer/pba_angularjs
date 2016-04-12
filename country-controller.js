// Controller for country JavaScript
var countryControllers = angular.module('countryControllers', []);

countryControllers.controller('CountryListCtrl', function ($scope, countries) {
    countries.list(function (countries) {
        $scope.countries = countries;
    });
});

countryControllers.controller('CountryDetailCtrl', function ($scope, $routeParams, countries) {
    countries.find($routeParams.countryId, function(country){
        $scope.country = country;
    });
});

//Customer filter for Changing the URL with spaces
countryApp.filter('encodeURI', function() {
    return window.encodeURI;
})
