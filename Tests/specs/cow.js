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

});

}());
