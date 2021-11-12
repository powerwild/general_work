const User = require('./user');

class Doctor extends User {
    constructor(name, month, day, year) {
        super(name, month, day, year);
        this.name = name;
        this.birthdate = new Date(year, month - 1, day);
        this.insurance = [];
    }
    addInsurance = (str) => {
        this.insurance.push(str);
    }
    acceptsInsurance = (str) => {
        for (let i = 0; i < this.insurance.length; i++){
            if (str === this.insurance[i]) return true;
        }
        return false;
    }
    removeInsurance = (str) => {
        this.insurance = this.insurance.filter(el => el !== str);
    }
}

module.exports = Doctor;
