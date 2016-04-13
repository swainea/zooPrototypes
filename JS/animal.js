(function(ns) {
  'use strict';

  var yearInMs = 31557600000;


  ns.Animal = function Animal(name, doB){
    if (typeof name  !== 'string'){
      var err = TypeError( 'Please enter a name for your animal' );
      throw err;
    }
    this.doB = new Date (doB);

    if (this.doB.toString() === 'Invalid Date') {
      var err2 = TypeError( 'Please enter a valid date of birth for your animal' );
      throw err2;
    }
    this.name = name;
  };

  ns.Animal.prototype.age = function age (){
    if (this.isDead) {
      var err = Error( this.name + ' is dead' );
      throw err;
    }
    return Math.floor(((Date.now() - this.doB.getTime()) / yearInMs));
  };

  ns.Animal.prototype.expire = function expire (){
    return(this.isDead = true);
  };

  ns.Animal.prototype.toString = function toString(){
     return this.name + ', ' + this.age();
 };

  window.zoo = ns;
}(window.zoo || {}));
