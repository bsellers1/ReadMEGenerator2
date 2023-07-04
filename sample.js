const fs = require('fs');

function renderLicenseBadge(license) {
    if (!license) {
        return ``;
    } else {
        return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
    }
}

function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `https://lbesson.mit-license.org/`
    }
    if (license === 'GPL') {
        return `http://perso.crans.org/besson/LICENSE.html`
    }
    if (license === 'Apache') {
        return `https://www.apache.org/licenses/LICENSE-2.0`
    }
    if (license === 'Eclipse') {
        return `https://www.eclipse.org/legal/epl-v10.html`
    }
}

function renderLicenseSection(license) {
    if (!license) {
        return ``;
    } else {
        return `This project is licensed under the ${license} license.`
    }
}

function sample({ title, description, license, installation, usage, contribution, github, email }) {
    return `# ${title}

## Description
- ${description}  
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Contact](#contact)
- [License](#license)

## Installation
- ${installation} 
    
## Usage
- ${usage}
    
 ## Contribution
- ${contribution}
    
## Contact
- Contact email: ${email} 
- GitHub: ${github}

## License
${renderLicenseBadge(license)}
- ${renderLicenseSection(license)}
    `;
}

module.exports = sample;