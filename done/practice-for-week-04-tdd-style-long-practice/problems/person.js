class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHello = () => {
    return `Hi I'm ${this.name}`;
  }
  visit = (otherPerson) => {
    return `${this.name} visited ${otherPerson.name}`;
  }
  switchVisit = (otherPerson) => {
    return otherPerson.visit(this);
  }
  update = (obj) => {
    if (typeof obj !== 'object' || Array.isArray(obj)){
      throw TypeError('Not an object');
    }
    if (!obj.name && !obj.age) {
      throw TypeError('Object has no name or age');
    }
    this.name = obj.name;
    this.age = obj.age;
    return true;
  }
  tryUpdate = (obj) => {
    try{
    if (this.update(obj)) return true;
    }catch{
    }
    return false;
  }
  static greetAll(obj){
    return obj.map(el => el.sayHello());
  }
}

module.exports = Person;
