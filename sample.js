function sample({title, description, installation, usage, contribution, github, email}) {
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