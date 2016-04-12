(function(ns) {
  'use strict';

  ns.Giraffe = function Giraffe (name, doB){
    ns.Animal.call( this, name, doB);
    this.children = [];
  };

ns.Giraffe.prototype = Object.create(ns.Animal.prototype);
ns.Giraffe.prototype.constructor = ns.Giraffe;

ns.Giraffe.prototype.birth = function birth(name){
  var newChild = new ns.Giraffe(name, Date.now());
  this.children.push( newChild );
  return newChild;
};

ns.Giraffe.prototype.toString = function toString(){
   return this.name + ' is the child of Jerry';
};

ns.Giraffe.prototype.leavesEaten = function leavesEaten( hoursSpentEating ){
  return (hoursSpentEating * this.name.length) + ' pounds of leaves';
};

  window.zoo = ns;
}(window.zoo || {}));
