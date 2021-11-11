const Person = require('../problems/person');
const chai = require('chai');
const expect = chai.expect;

describe('Person class', function(){
    let person;
    let person2;
    let personArr;
    beforeEach(() => {
        person = new Person('Mike', 30);
        person2 = new Person('Jan', 60);
        personArr = [person, person2];
    })
    it('should have a name and age property that set properly when instance is created', function(){
        expect(person).to.have.property('name', 'Mike');
        expect(person).to.have.property('age', 30);
    })
    it('should print greeting with this.name value', function(){
        expect(person.sayHello()).to.eql(`Hi I'm ${person.name}`);
    })
    it('should return a string this.person visited passed in person', function(){
        expect(person.visit(person2)).to.eql(`${person.name} visited ${person2.name}`);
    })
    it('should invoke visit method reversing the arguments', function(){
        expect(person.switchVisit(person2)).to.eql(person2.visit(person));
    })
    context('if obj is not an object', function(){
        it('should throw new TypeError with message', function(){
            // expect(person.update([3])).to.throw(TypeError);
            expect(() => person.update(3)).to.throw(TypeError)
        })
    })
    context('if obj is an object', function(){
        it('should update the property values of old instance with new object values', function(){
            person.update(person2)
            expect(person.name).to.eql(person2.name);
            expect(person.age).to.eql(person2.age);
        })
        it('should throw TypeError if passed in obj does not have a name and age property', function(){
            expect(() => person.update({})).to.throw(TypeError);
        })
    })
    context('if invocation of update was successful', function(){
        it('should return true', function(){
            expect(person.tryUpdate(person2)).to.be.true;
            expect(person.name).to.eql(person2.name);
            expect(person.age).to.eql(person2.age);
        })
    })
    context('if invocation of update is not successful', function(){
        it('should not throw error and only return false', function(){
            expect(person.tryUpdate({})).to.be.false;
        })
    })
    it('should call sayHello on all instances inside array and return new array of string stored from calling', function(){
        expect(Person.greetAll(personArr)).to.eql(personArr.map(el => el.sayHello()));
    })
})
