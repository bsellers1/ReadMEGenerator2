const fs = require('fs');
const inquirer = require('inquirer');
const sample = require ('./sample.js');

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
            name: 'license',
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
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'email',
        },
])
.then(function ({ title, description, license, installation, usage, contribution, github, email }) {
    fs.writeFile('./README.md', sample({ title, description, license, installation, usage, contribution, github, email }), err => {
        err ? console.log(err) : console.log('README file created successfully!');
    });
});