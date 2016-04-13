(function() {
  'use strict';

var assert = chai.assert;

suite( 'Cow', function (){
  test('create cow with proper args', function(){
    var testCow = new window.zoo.Cow('testCow', '5-2-1988');

    assert.ok( testCow, 'testCow exists');
    assert.ok( testCow instanceof window.zoo.Cow, 'cow objects are from ns.Cow');
    assert.strictEqual( testCow.toString(), 'Moo!!! Says: testCow', 'the toString method works');

  });

  test('birth function works as expected', function (){
    var Spot = new window.zoo.Cow('Spot', '4-15-1990');
    var newCalf = Spot.birth( 'Spot2' );

    assert.ok( newCalf, 'testCalf exists');
    assert.ok( newCalf instanceof window.zoo.Cow, 'cow objects are from ns.Cow');
    assert.ok( Date.now() - newCalf.doB < 50, 'birth time is approximately correct' );
    assert.ok(Spot.calves.length > 0, 'calf is created');
  });

  test('moo function works as expected', function (){
    var Dot = new window.zoo.Cow('Dot', '4-15-1990');

    assert.strictEqual( Dot.moos(60), '300 moos', 'moo function works as expected');
  });

  test('moo function error works as expected', function (){
    var Dottie = new window.zoo.Cow('Dottie', '4-15-1990');

    assert.ok( Dottie, 'Dottie exists');
    assert.ok( Dottie instanceof window.zoo.Cow, 'cow objects are from ns.Cow');

    try{
      Dottie.moos('hello');

    } catch (err){
      console.log(err);
      assert.strictEqual( err.message, 'Please enter a number', 'error matches thrown error');
      assert.ok( err instanceof TypeError, 'type error returns truthy');
    }
  });

  test ('birth function error works as expected', function (){
    var Spottie = new window.zoo.Cow('Spottie', '4-15-1990');

    assert.ok( Spottie, 'Spottie exists');
    assert.ok( Spottie instanceof window.zoo.Cow, 'cow objects are from ns.Cow');

    try{
      Spottie.birth(3);

    } catch (err) {
      assert.strictEqual( err.message, 'Please enter a valid cow', 'error matches thrown error');
      assert.ok( err instanceof TypeError, 'type error returns truthy');
    }
  });

});

}());
