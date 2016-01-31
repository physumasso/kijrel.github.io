(function() {
  var app = angular.module('physum',[]);
  
  app.controller('MembresCa', ['$http', function($http){
    var equipe = this;
    equipe.membres = [];
    $http.get('/kijrel.github.io/json/membres-exec.json').success(function(data){
      equipe.membres=data;
    });
    
    equipe.tab = -1;
    
    equipe.setTab = function(newValue){
      if (this.tab == newValue){
        this.tab = -1;
      }
      else{
        this.tab = newValue;
      }
    };

    equipe.isSet = function(tabName){
      return this.tab === tabName;
    };
    
  }]);
  
  app.controller('TabController', function(){
    this.tab = -1;
    
    this.setTab = function(newValue){
      if (this.tab == newValue){
        this.tab = -1;
      }
      else{
        this.tab = newValue;
      }
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
  
  app.controller('Comites', ['$http', function($http){
    var scope = this;
    scope.com = [];
    $http.get('/kijrel.github.io/json/comites.json').success(function(data){
      scope.com=data;
    });
  }]);
  
  app.controller('Evenements', ['$http', function($http){
    var scope = this;
    scope.eve = [];
    $http.get('/kijrel.github.io/json/evenements.json').success(function(data){
      scope.eve=data;
    });
  }]);
  
})();