const User = require('./user');

class Patient extends User {
    constructor(name, month, day, year){
        super(name, month, day, year);
        this.name = name;
        this.birthdate = new Date(year, month - 1, day);
        this.insurance = null;
    }
    setInsurance = (str) => {
        this.insurance = str;
    }
    getInsurance = () => this.insurance;
}

module.exports = Patient;
