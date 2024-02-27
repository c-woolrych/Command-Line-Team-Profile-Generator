// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        if (typeof email !== "string") {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        return this.email;
    }

    getRole() {
        return 'Employee';
    } 
}

module.exports = Employee;