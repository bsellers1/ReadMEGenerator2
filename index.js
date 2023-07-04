const fs = require('fs');
const inquirer = require('inquirer');
const sample = require ('./sample.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Try again, enter a title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'description',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Try again, enter a description.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'What license do you need?',
            choices: ['MIT', 'Apache', 'Eclipse', 'GNU'],
            name: 'license',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Try again, enter a license.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'How would one install your project?',
            name: 'installation',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Try again, enter installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'How would one use the project?',
            name: 'usage',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Try again, enter usage information.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Contribution information for your project?',
            name: 'contribution',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Try again, enter contribution information.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Try again, enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Try again, enter your email address.');
                    return false;
                }
            }
        },
])
.then(function ({ title, description, license, installation, usage, contribution, github, email }) {
    fs.writeFile('.genREADME.md', sample({ title, description, license, installation, usage, contribution, github, email }), err => {
        err ? console.log(err) : console.log('Look at your new README in the genREADME file!');
    });
});