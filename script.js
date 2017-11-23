//On crée un module
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  //On sélectionne le fichier script.json
    $http.get("script.json").then(function(response) {
        $scope.myWelcome = response.data;
    });
});
