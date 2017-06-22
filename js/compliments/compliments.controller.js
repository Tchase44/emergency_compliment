`use strict`;

(function(){
  var app = angular.module("emergencyComp",[]);
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    // var vm = this;
    let retrunComp = function (){ return Math.floor(Math.random()*data.length) }
    let num = retrunComp()
    this.comps = data[num]
    
  }

}());
