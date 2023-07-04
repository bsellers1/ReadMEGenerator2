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
- ${license}
    `;
}

module.exports = sample;