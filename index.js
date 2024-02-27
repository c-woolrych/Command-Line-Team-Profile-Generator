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
            name: 'managerName',
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
            name: 'managerId',
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
            name: 'managerEmail',
            message: 'Enter managers email address.'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter managers office number'
        }
    ])
}