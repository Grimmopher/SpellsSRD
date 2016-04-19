(function() {
    
    var app = angular.module("spellbook",[]);

    var MainController = function ($scope, $http) {
    
        var onSpellComplete = function(response){
            $scope.spells = response.data;    
        };
             
        var onError = function(reason){
            $scope.error = "Could not fetch the data.";
        };
            
        $http.get("https://raw.githubusercontent.com/Grimmopher/srd_spells/master/spells.json")
              .then(onSpellComplete, onError);
              
        $scope.spellSortOrder = "+name";
    };

    app.controller("MainController", ["$scope", "$http", MainController]);
    
}());