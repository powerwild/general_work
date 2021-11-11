const reverseString = require('../problems/reverse-string');
const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
const { isTypedArray } = require('util/types');
chai.use(spies);

describe('reverseString', function (){
    it('when passed fun should return nuf', function(){
    expect(reverseString('fun')).to.eql('nuf');
    })
})
