const User = require('./user');

class Doctor extends User {
    constructor(name, month, day, year) {
        super(name, month, day, year);
        this.name = name;
        this.birthdate = new Date(year, month - 1, day);
        this.insurance = null;
        this.docApps = [];
    }
    addInsurance = (str) => {
        this.insurance = str;
    }
    acceptsInsurance = (str) => {
            if (str === this.insurance) return true;
        return false;
    }
    removeInsurance = () => {
        this.insurance = null;
    }
}

module.exports = Doctor;
