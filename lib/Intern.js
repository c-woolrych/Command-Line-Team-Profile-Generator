// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    contructor(school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        if (typeof school !== "string") {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;