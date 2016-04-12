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
    var testCalf = new window.zoo.Cow.prototype.birth('testCalf');
    this.calves = [];

    assert.ok( testCalf, 'testCalf exists');
    assert.ok( testCalf instanceof window.zoo.Cow, 'cow objects are from ns.Cow');
    assert.ok( Date.now() - testCalf.doB < 50, 'birth time is approximately correct' );
    assert.ok(this.claves.length > 0, 'calf is created');
  });
});

}());
