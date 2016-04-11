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
    var testCalf = new window.zoo.Cow('testCalf', '4-16-1990');

    assert.ok( testCalf, 'testCalf exists');
    assert.ok( testCalf instanceof window.zoo.Cow, 'cow objects are from ns.Cow');
  });
});

}());
