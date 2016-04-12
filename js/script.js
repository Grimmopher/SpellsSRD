(function() {
    
    var app = angular.module("spellbook",[]);

    var MainController = function ($scope, $http) {
    
           $http.get("https://raw.githubusercontent.com/Grimmopher/srd_spells/master/spells.json")
           .then(onSpellComplete, onError);
           
        function classes(spells.tags) {
  
            var tagClasses = {};
            
            for (let i = 0; i < tags.length; i++){
                if (tags[i] == "wizard") tagClasses.wizard = true;
                if (tags[i] == "ranger") tagClasses.ranger = true;
                if (tags[i] == "rogue") tagClasses.rogue = true;
                if (tags[i] == "barbarian") tagClasses.barbarian = true;
                if (tags[i] == "fighter") tagClasses.fighter = true;
                if (tags[i] == "druid") tagClasses.druid = true;
                if (tags[i] == "monk") tagClasses.monk = true;
                if (tags[i] == "sorcerer") tagClasses.sorcerer = true;
                if (tags[i] == "warlock") tagClasses.warlock = true;
                if (tags[i] == "paladin") tagClasses.paladin = true;
            }
            return tagClasses;
        }
        
        var classes = classFinder(tags);
        
        $scope.classes = classes;
        
       // var spellClass = [];
        //var findClass = function(response){
          //  for (let i=0; i<spells.tags.length; i++) {
            //    if i == "wizard" {};}}   
                                 
        var onSpellComplete = function(response){
            $scope.spells = response.data;
        };
        
        var onError = function(reason){
            $scope.error = "Could not fetch the data.";
        };
        
       $scope.spellsSortOrder = "+name";    
    };

    app.controller("MainController", ["$scope", "$http", MainController]);
    
}());

     //$scope.search = function(username){
          //  $http.get("https://api.github.com/users/" + username)
            //    .then(onSpellComplete, onError);
       // };
  