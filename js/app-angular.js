(function() {
  var app = angular.module('physum', ['ngAnimate']);
  
  app.controller('MembresCa', ['$http', function($http){
    var equipe = this;
    equipe.membres = [];
    equipe.tab=[];
    $http.get('./json/membres-exec.html').success(function(data){
      equipe.membres = data;
      for(i=0;i<equipe.membres.length;i++){
        equipe.tab[i] = false;
      }
    });
    
    oldValue = -1;
    
    equipe.setTab = function(newValue){
      equipe.tab[oldValue] = false;
      if (oldValue != newValue){
        equipe.tab[newValue] = true;
        oldValue = newValue;
      }
      else{
        oldValue = -1;
      }
    };
    
  }]);
  
  app.controller('Comites', ['$http', function($http){
    var scope = this;
    scope.com = [];
    $http.get('./json/comites.html').success(function(data){
      scope.com=data;
    });
  }]);
  
  app.controller('Evenements', ['$http', function($http){
    var scope = this;
    scope.eve = [];
    $http.get('./json/evenements.html').success(function(data){
      scope.eve=data;
    });
  }]);
  
})();