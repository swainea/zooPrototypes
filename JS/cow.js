(function(ns) {
  'use strict';

  ns.Cow = function Cow (name, doB){
    ns.Animal.call( this, name, doB);
    this.calves = [];
  };

  ns.Cow.prototype = Object.create(ns.Animal.prototype);
  ns.Cow.prototype.constructor = ns.Cow;

  // ns.Cow.protype.moo = function moo (moo per minute){
  //   return Math.random
  // }

  ns.Cow.prototype.birth = function birth(name){
    var newCalf = new ns.Cow(name, Date.now());
    this.calves.push( name );
    return newCalf;
  };

  ns.Cow.prototype.toString = function toString(){
     return 'Moo!!! Says: '+ this.name;
 };

  window.zoo = ns;
}(window.zoo || {}));
