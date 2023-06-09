const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'contribution',
        },
    ])