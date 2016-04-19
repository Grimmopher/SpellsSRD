(function() {
    
    var app = angular.module("spellbook",[]);

    var MainController = function ($scope, $http) {
        var spells= [];
        
        $http.get("https://raw.githubusercontent.com/Grimmopher/srd_spells/master/spells.json")
           .then(onSpellComplete, onError);
        
        var onSpellComplete = function(response){
            //let temp = response.data;
            //let temp2 = cleanSpells(temp);
            $scope.spells = response.data;
            //$scope.spellsSortOrder = "+name";  
        };
        

        
        var onError = function(reason){
            $scope.error = "Could not fetch the data.";
            
        };
              
        function cleanSpells(rawSpells){
            let finalSpells = [];
            for (let i =0; i<rawSpells.length; i++) {
                finalSpells[i].name = rawSpells[i].name;
                finalSpells[i].ritual = rawSpells[i].ritual;
                finalSpells[i].level = rawSpells[i].level;
                finalSpells[i].school = rawSpells[i].school;
                finalSpells[i].casting_time = rawSpells[i].casting_time;
                finalSpells[i].range = rawSpells[i].range;
                finalSpells[i].components.raw = rawSpells[i].components.raw;
                finalSpells[i].duration = rawSpells[i].duration;
                finalSpells[i].description = rawSpells[i].description;
            };
            console.log(finalSpells);
            return finalSpells;            
        };
        
        
        /*function cleanClasses(spells) {
  
            var finalClasses = [];
            
            for (let i = 0; i < spells.tags.length; i++){
                if (spells.tags[i] == "wizard") finalClasses.wizard = true;
                if (spells.tags[i] == "ranger") finalClasses.ranger = true;
                if (spells.tags[i] == "rogue") finalClasses.rogue = true;
                if (spells.tags[i] == "barbarian") finalClasses.barbarian = true;
                if (spells.tags[i] == "fighter") finalClasses.fighter = true;
                if (spells.tags[i] == "druid") finalClasses.druid = true;
                if (spells.tags[i] == "monk") finalClasses.monk = true;
                if (spells.tags[i] == "sorcerer") finalClasses.sorcerer = true;
                if (spells.tags[i] == "warlock") finalClasses.warlock = true;
                if (spells.tags[i] == "paladin") finalClasses.paladin = true;
            };
            return finalClasses;
        }*/
        
  
    };

    app.controller("MainController", ["$scope", "$http", MainController]);
    
}());

     //$scope.search = function(username){
          //  $http.get("https://api.github.com/users/" + username)
            //    .then(onSpellComplete, onError);
       // };
  