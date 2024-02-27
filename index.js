const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

function addManager() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team managers name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'name' to be a non-empty string");
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'ID' to be a number");
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter managers email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'email' to be a non-empty string");
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter managers office number:',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'office number' to be a number");
                    return false;
                };
            }
        }
    ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamMembers.push(manager);
        addTeamMember();
    })
}

function addTeamMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Would you like to...',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        }
    ])
    .then(choice => {
        switch (choice.menu) {
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            case 'Finish building the team':
                fs.writeFile(outputPath, render(teamMembers), err => {
                    if (err) {
                        console.log(err);
                    }
                });
        }
    })
}

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineers name: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'name' to be a non-empty string");
                        return false;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineers ID: ',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'ID' to be a number");
                        return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineers email: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'email' to be a non-empty string");
                        return false;
                };
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineers Github username: ',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'github' to be a non-empty string");
                        return false;
                };
            }
        }
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamMembers.push(engineer);
        addTeamMember();
    })
}

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter interns name: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'name' to be a non-empty string");
                        return false;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter interns ID: ',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'ID' to be a number");
                        return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter interns email: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'email' to be a non-empty string");
                        return false;
                };
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter interns school: ',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Expected parameter 'school' to be a non-empty string");
                        return false;
                };
            }
        }
    ])
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamMembers.push(intern);
        addTeamMember();
    })
}

addManager();