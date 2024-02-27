// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        if (typeof this.name !== "string") {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        return this.name;
    }

    getId() {
        if (typeof id !== "number") {
            throw new Error("Expected parameter 'ID' to be a number");
        }
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