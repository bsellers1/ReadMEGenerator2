function sample({title, description, license, installation, usage, contribution, github, email}) {
    return `
    # ${title}

    ## Description
    ${description}  
    
    ## Installation
    ${installation} 
    
    ## Usage
    ${usage}
    
    ## Contribution
    ${contribution}
    
    ## Contact
    Contact email: ${email} GitHub: ${github})
    
    
    ## License
    ${license}
    `;
    }

module.exports = sample;