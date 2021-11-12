class User {
    constructor(name, month, day, year){
        this.name = name;
        this.birthdate = new Date(year, month - 1, day);
    }
    getBirthday = () => this.birthdate.toDateString();
    getAge = () => {
        let today = new Date();
        return today.getFullYear() - this.birthdate.getFullYear();
    }

};

let me = new User('Casey', 04, 06, 1991);
console.log(me.name);
console.log(me.birthdate);
console.log(me.getBirthday());
console.log(me.getAge());
console.log();
console.log();
console.log();
console.log();
module.exports = User;
