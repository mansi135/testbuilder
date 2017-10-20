/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  
  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
//  var assert = chai.FILL_ME_IN;
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4901456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });
  
  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
//  var expect = chai.expect;
  var should = chai.should();

 
//  it('has a prefix of 51 and a length of 16', function() {
//    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
//  });
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
 // var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  
  var should = chai.should();
  var lenArray = [16,19];
  var preArray = ['65','644','645','646', '647', '648', '649','6011'];
  var remArray = ['12345678901234','12345678901234599','1234567890123','1234567890777777','123456789066','123456789055509'];

  function testDiscover(prefix,l,string){
    it('has a prefix of ' + prefix + ' and a length of ' + l,function(){
    detectNetwork(string).should.equal('Discover');
  });
  }


  for(var i=0; i<preArray.length; i++){
    for(var j=0; j<lenArray.length; j++){
      if (preArray[i].length === 2){
        var string = preArray[i] + remArray[j];
      } else if (preArray[i].length === 3){
        var string = preArray[i] + remArray[j+2];
      } else {
        var string = preArray[i] + remArray[j+4];
      }
      testDiscover(preArray[i],lenArray[j],string); 
    }
  }


});


describe('Maestro', function() {
  
  var should = chai.should();
  var testArray = ['501881230987', '5018812309873', '50188123098734', '501881230987345', 
                    '5018812309873456','50188123098734567', '501881230987345678', '5018812309873456789',
                    '502081230987', '5020812309873', '50208123098734', '502081230987345', 
                    '5020812309873456','50208123098734567', '502081230987345678', '5020812309873456789',
                    '503881230987', '5038812309873', '50388123098734', '503881230987345', 
                    '5038812309873456','50388123098734567', '503881230987345678', '5038812309873456789',
                    '630481230987', '6304812309873', '63048123098734', '630481230987345', 
                    '6304812309873456','63048123098734567', '630481230987345678', '6304812309873456789'];

  var prefixArray = ['5018','5020','5038','6304'];

  function testMaestro(prefix,i,l){
    it('has a prefix of ' + prefix + ' and a length of ' + l,function(){
    detectNetwork(testArray[i]).should.equal('Maestro');
  });
  }
  
  for(var j=0; j<4; j++){
    for(var i=0; i<8; i++) {
    testMaestro(prefixArray[j],(i+(j*8)),(12+i));
    }
  }

});

describe('Should support China UnionPay', function(){
  
  var should = chai.should();
  var arrayRemaining = ['1234567890', '12345678901', '123456789012', '1234567890123'];
  var arrayRemaining1 = ['0001234567890', '00012345678901', '000123456789012', '0001234567890123'];
  var arrayRemaining2 = ['001234567890', '0012345678901', '00123456789012', '001234567890123'];

  function testChina(prefix,l,string){
    it('has a prefix of ' + prefix + ' and a length of ' + l,function(){
    detectNetwork(string).should.equal('China UnionPay');
  });
  }

  for(var l=0; l<4; l++){
    for(var i=622126; i<=622925; i++){
      var string = (i + arrayRemaining[l]);
      testChina(i,(l+16),string);
    }
  }

  for(var l=0; l<4; l++){
    for(var i=624; i<=626; i++){
      var string = (i + arrayRemaining1[l]);
      testChina(i,(l+16),string);
    }
  }

  for(var l=0; l<4; l++){
    for(var i=6282; i<=6288; i++){
      var string = (i + arrayRemaining2[l]);
      testChina(i,(l+16),string);
    }
  }
  

});

describe('Should support Switch',function(){


  var should = chai.should();
  var lenArray = [16,18,19];
  var preArray = ['4903','4905','4911','4936','6333','6759','564182','633110'];
  var remArray = ['123456789066','12345678908888','123456789088889','1234567890','123456789088','1234567890889'];

  function testSwitch(prefix,l,string){
    it('has a prefix of ' + prefix + ' and a length of ' + l,function(){
    detectNetwork(string).should.equal('Switch');
  });
  }


  for(var i=0; i<preArray.length; i++){
    for(var j=0; j<lenArray.length; j++){
      if (preArray[i].length === 4){
        var string = preArray[i] + remArray[j];
      } else {
        var string = preArray[i] + remArray[j+3];
      }
      testSwitch(preArray[i],lenArray[j],string); 
    }
  }


});



