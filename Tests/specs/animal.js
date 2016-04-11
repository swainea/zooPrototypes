(function() {
  'use strict';

var assert = chai.assert;

suite( 'Animal',function (){
  test('create animal with proper args', function(){
    var testAnimal = new window.zoo.Animal('testAnimal', '5-2-1988');

    assert.ok( testAnimal, 'testAnimal exists');
    assert.ok( testAnimal instanceof window.zoo.Animal, 'animal objects are from ns.Animal'); //ok wants a truthy or falsey value
    assert.strictEqual( testAnimal.name, 'testAnimal', 'the name should be assigned to the object');
    assert.strictEqual( testAnimal.age(), 27, 'the age should be 27');
    assert.strictEqual( testAnimal.toString(), 'testAnimal, 27', 'the toString method works');
  });
});

}());
