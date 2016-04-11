(function(ns) {
  'use strict';

  ns.Giraffe = function Giraffe (name, age){
    ns.Animal.call( this, name, age);
  };

ns.Giraffe.prototype = Object.create(ns.Animal.prototype);
ns.Giraffe.prototype.constructor = ns.Giraffe;

ns.Giraffe.prototype.birth = function birth(name){
  var newCalf = new ns.Giraffe(name, Date.now());
  this.calves.push( Giraffe );
  return newCalf;
};


  window.zoo = ns;
}(window.zoo || {}));
