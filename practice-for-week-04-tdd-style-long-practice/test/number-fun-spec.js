const { returnsThree, reciprocal} = require('../problems/number-fun');
const assert = require("assert");
const chai = require("chai");
const { isTypedArray } = require('util/types');
const expect = chai.expect;

describe('returnsThree', function(){
    it('should return the number 3', function(){
        expect(returnsThree()).to.eql(3);
    });
});
describe('reciprocal', function(){
    it('should return the reciprocal', function(){
        expect(reciprocal(-5)).to.eql(1 / -5);
        expect(reciprocal(100)).to.eql(1 / 100);
    });

});
