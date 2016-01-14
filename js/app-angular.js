(function() {
  var app = angular.module('physum',[]);
  
  app.controller('MembresCa', ['$http', function($http){
    var equipe = this;
    equipe.membres = [];
    $http.get('/kijrel.github.io/json/membres-exec.json').success(function(data){
      equipe.membres=data;
    });
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
  
  app.controller('AlbumCtrlTest', ['$http', function($http){
    var scope = this;
    scope.albums = [];
    $http.get('/kijrel.github.io/json/albums.json').success(function(data){
      scope.albums=data;
    });
    this.tab=1;
    
  }]);
  
})();