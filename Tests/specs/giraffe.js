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
    // WHY DOES THE ABOVE NOT WORK BUT LINE 24 WORKS?!
  });

}());
