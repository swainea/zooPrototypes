(function() {
  'use strict';

  var assert = chai.assert;

  suite( 'Giraffe', function (){
    test('create giraffe with proper args', function(){
      var testGiraffe = new window.zoo.Giraffe('testGiraffe', '5-2-1988');

      assert.ok( testGiraffe, 'testGiraffe exists');
      assert.ok( testGiraffe instanceof window.zoo.Giraffe, 'giraffe objects are from ns.Giraffe');


    });
    test('birth function works as expected', function (){
      var Jerry = new window.zoo.Giraffe('Jerry', '4-10-1992');
      var newChild = Jerry.birth( 'Jerry2' );

      assert.ok( newChild, 'testCalf exists');
      assert.ok( newChild instanceof window.zoo.Giraffe, 'giraffe objects are from ns.Giraffe');
      assert.ok( Date.now() - newChild.doB < 50, 'birth time is approximately correct' );
      assert.ok(Jerry.children.length > 0, 'calf is created');
      assert.strictEqual( newChild.toString(), 'Jerry2 is the child of Jerry', 'the toString method works');
    });

    test('leavesEaten function works as expected', function (){
      var Ginny = new window.zoo.Giraffe('Ginny', '5-3-1992');

      assert.strictEqual( Ginny.leavesEaten(3), '15 pounds of leaves', 'leavesEaten functions as expected');
    });

    test ('birth function error works as expected', function (){
      var Ginny2 = new window.zoo.Giraffe('Ginny2', '4-15-1990');

      assert.ok( Ginny2, 'Ginny2 exists');
      assert.ok( Ginny2 instanceof window.zoo.Giraffe, 'girtaffe objects are from ns.Giraffe');

      try{
        Ginny2.birth(746);

      } catch (err) {
        assert.strictEqual( err.message, 'Please enter a valid giraffe', 'error matches thrown error');
      }
    });

    test('leavesEaten function works as expected', function (){
      var Janie = new window.zoo.Giraffe('Janie', '5-2-1988');

      assert.ok( Janie, 'Janie exists' );
      assert.ok( Janie instanceof window.zoo.Giraffe, 'giraffe objects are from ns.Giraffe');

      try {
        Janie.leavesEaten('one hundered');

      } catch (err) {

        assert.strictEqual( err.message, 'Please enter hours as a number', 'error matches thrown error');
        assert.ok( err instanceof TypeError, 'type error returns truthy');
      }
    });


  });

}());
