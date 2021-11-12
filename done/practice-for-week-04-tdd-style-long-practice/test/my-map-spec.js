const myMap = require('../problems/my-map');
const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
const { isTypedArray } = require('util/types');
chai.use(spies);

describe('myMap', function(){
    let arr;
    beforeEach(() => {
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    })
    it('should return new array of elements that have been passed through the callback', function(){
        expect(myMap([1, 2, 3, 4], (num) => num * 2)).to.eql([2, 4, 6, 8]);
        expect(myMap([-1, -2, -3, -4], (num) => num * 2)).to.eql([-2, -4, -6, -8]);
    })
    it('should not mutate the passed in array', function(){
        expect(arr).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    })
    it('should not use the .map method', function(){
        chai.spy.on(arr, 'map');
        expect(arr.map).to.not.be.called();

    })
    it('should invoke the callback on each element of the passed in array', function(){
        let cb = chai.spy((num) => num *2);
        myMap(arr, cb);
        expect(cb).to.be.called(arr.length);
    })
})
