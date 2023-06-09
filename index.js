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
            message: 'Describe your project.',
            name: 'description',
        },
        {
            type: 'list',
            message: 'What license do you need?',
            choices: ['MIT', 'Apache', 'Eclipse', 'GNU'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'How would one install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How would one use the project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Contribution information for your project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
])
.then(function ({ title, description, license, installation, usage, contribution, github, email }) {
    fs.writeFile('./README.md', sample({ title, description, license, installation, usage, contribution, github, email }), err => {
        err ? console.log(err) : console.log('README file created successfully!');
    });
});