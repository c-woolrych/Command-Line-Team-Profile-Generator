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

const team = [];

function addManager() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team managers name.',
            validate: nameInput => {
                if (nameInput !== "string") {
                console.log("Expected parameter 'name' to be a non-empty string");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID.',
            validate: idInput => {
                if (idInput !== "number") {
                console.log("Expected parameter 'ID' to be a number");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter managers email address.',
            validate: emailInput => {
                if (emailInput !== "string") {
                console.log("Expected parameter 'name' to be a non-empty string");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter managers office number',
            validate: officeInput => {
                if (officeInput !== "number") {
                console.log("Expected parameter 'name' to be a number");
                    return false;
                } else {
                    return true;
                };
            }
        }
    ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addTeamMember();
    })
}

function addTeamMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        }
    ])
    .then(role => {
        switch (role.choice) {
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            case 'Finish building the team':
                renderProfile(team)
        }
    })
}

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineers name',
            validate: nameInput => {
                if (nameInput !== "string") {
                console.log("Expected parameter 'name' to be a non-empty string");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineers ID',
            validate: idInput => {
                if (idInput !== "number") {
                console.log("Expected parameter 'ID' to be a number");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineers email',
            validate: emailInput => {
                if (emailInput !== "string") {
                console.log("Expected parameter 'name' to be a non-empty string");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineers Github username',
            validate: githubInput => {
                if (githubInput !== "string") {
                console.log("Expected parameter 'name' to be a non-empty string");
                    return false;
                } else {
                    return true;
                };
            }
        }
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        addTeamMember();
    })
}

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter interns name',
            validate: nameInput => {
                if (nameInput !== "string") {
                console.log("Expected parameter 'name' to be a non-empty string");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter interns ID',
            validate: idInput => {
                if (idInput !== "number") {
                console.log("Expected parameter 'ID' to be a number");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter interns email',
            validate: emailInput => {
                if (emailInput !== "string") {
                console.log("Expected parameter 'name' to be a non-empty string");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter interns school',
            validate: githubInput => {
                if (githubInput !== "string") {
                console.log("Expected parameter 'name' to be a non-empty string");
                    return false;
                } else {
                    return true;
                };
            }
        }
    ])
    .then((data) => {
        const intern = new Engineer(data.name, data.id, data.email, data.school);
        team.push(intern);
        addTeamMember();
    })
}

addManager();
function renderProfile(team) {
    fs.writeFile(outputPath, render(team))
}