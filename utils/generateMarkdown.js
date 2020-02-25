const badge = (license) =>{
  if(license !== "None"){
    return `![license](https://img.shields.io/badge/license-${license}-green.svg)`
  }
}

function generateMarkdown(data) {
  //console.log(data)
  return `
# ${data.title}

${badge(data.license, data.usergithub, data.title)}

# Description

${data.projDes}


## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)



## Installation  


To install necessary dependencies, run the following command:

\`\`\`
${data.instDep}
\`\`\`

## Usage

${data.usingRepo}

## License

This project is licensed under the ${data.license} license

## Contributing

${data.usingContribution}

## Tests

To run tests, run the following command:

\`\`\`
${data.runTest}
\`\`\`

## Questions

![image](${data.avatar_url}&s=200)


if you have any questions about the repo, open an issue or contact ${data.usergithub} directly at ${data.email}

`;
}

module.exports = generateMarkdown;
