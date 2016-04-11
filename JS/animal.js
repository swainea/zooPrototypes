(function(ns) {
  'use strict';

  var yearInMs = 31557600000;


  ns.Animal = function Animal(name, doB){
    this.name = name;
    this.doB = new Date (doB);
  };

  ns.Animal.prototype.age = function age (){
        return Math.floor(((Date.now() - this.doB.getTime()) / yearInMs));
  };

  ns.Animal.prototype.toString = function toString(){
     return this.name + ', ' + this.age();
 };

  window.zoo = ns;
}(window.zoo || {}));
