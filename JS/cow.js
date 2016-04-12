(function(ns) {
  'use strict';

  ns.Cow = function Cow (name, doB){
    ns.Animal.call( this, name, doB);
    this.calves = [];
  };

  ns.Cow.prototype = Object.create(ns.Animal.prototype);
  ns.Cow.prototype.constructor = ns.Cow;

  ns.Cow.prototype.moo = function moo (){
    return (Math.random()*10);
  };

  ns.Cow.prototype.birth = function birth(name){
    var newCalf = new ns.Cow(name, Date.now());
    this.calves.push( newCalf );
    return newCalf;
  };

  ns.Cow.prototype.toString = function toString(){
     return 'Moo!!! Says: '+ this.name;
 };

  window.zoo = ns;
}(window.zoo || {}));
