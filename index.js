// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "What's the name of this project file going to be?",
},

{
    type: "input",
    name: "description",
    messgae: "Describe the purpose of this project file.",

},

{
    type: "input",
    name: "Installation",
    messgae: "How does one install this project",

},

{
    type: "input",
    name: "Usage",
    messgae: "Enter some useage information.",

},

{
    type: "input",
    name: "Contributions",
    messgae: "Any contribution guidelines?",

},

{
    type: "input",
    name: "Instructions",
    messgae: "Any test instructions?",

},

{
    type: "checkbox",
    name: "license",
    message: "Which license type should we add?",
    choices: ["none"], 
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
