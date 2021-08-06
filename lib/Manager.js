const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role = 'Manager', officeNumber) {
        super(name, id, email)
        this.role = role;
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return `${this.officeNumber}`
    }
};

module.exports = Manager; 