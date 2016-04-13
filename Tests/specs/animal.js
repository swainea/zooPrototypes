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

    test('age method returns false if isDead', function(){
      var testAnimal2 = new window.zoo.Animal('testAnimal2', '5-2-1988');

      assert.ok( testAnimal2, 'testAnimal2 exists');
      assert.strictEqual( testAnimal2.age(), 27, 'the age should be 27');
      assert.strictEqual( testAnimal2.expire(), testAnimal2.isDead === true, 'testAnimal2 expected dead');

      try{
        testAnimal2.expire();
        testAnimal2.age();

      } catch (err){
        assert.strictEqual( err.message, 'testAnimal2 is dead', 'error matches thrown error');
      }
    });

      test('create an animal with improper name', function(){

        try{
          var testAnimal3 = new window.zoo.Animal(27, 'heyhey');
          assert.strictEqual( testAnimal3.name, 'expecting error to throw' );

        } catch (err){
          console.log(err);
          assert.strictEqual( err.message, 'Please enter a name for your animal', 'error matches thrown error');
          // assert.strictEqual( err2.message, 'Please enter a valid date for your animal', 'error matches thrown error');
          assert.ok( err instanceof TypeError, 'type error returns truthy');
          // assert.ok( err2 instanceof TypeError, 'type error returns truthy');
        }
      });

      test('create an animal with improper doB', function(){

        try{
          var testAnimal4 = new window.zoo.Animal(27, 'heyhey');
          assert.strictEqual( testAnimal3.doB, 'expecting error to throw' );

        } catch (err2){
          console.log(err2);
          assert.strictEqual( err2.message, 'Please enter a valid date of birth for your animal', 'error matches thrown error');
          assert.ok( err2 instanceof TypeError, 'type error returns truthy');
        }
      });

  });

}());
