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


module.exports = User;
