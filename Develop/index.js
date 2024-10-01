// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input

const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the Title?',
            name: 'readMe-title'
        },
        {
            type: 'input',
            message: 'What does it do?',
            name: 'Given'
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'readMe_url'
        },
        {
            type: 'input',
            message: 'What are the features?',
            name: 'readMe_features'
        },
        {
            type: 'checkbox',
            message: 'Technologies Used?',
            choices: ['CSS', 'HTML', 'JavaScript', 'Python', 'AI', 'TypeScript'],
            name: 'readMe_tech'
        },
        {
            type: 'input',
            message: 'What is it used for?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Project Link?',
            name: 'project_links'
        },
        {
            type: 'list',
            choices: ['MIT', 'GPL', 'BSD', 'LGPL', 'MPL'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'How would you install it?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How would you test this?',
            name: 'testing'
        },
        {
            type: 'confirm',
            message: 'Did you work with others?',
            name: 'confirm'
        },
        {
            type: 'input',
            message: 'How can others contribute to your code?',
            name: 'contribute'
        }
    ])
    .then((response) => {
        // Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(`Success! ${fileName} is created`)
    );
}

// Function to handle collaborators or no collaborators
function handle(response, final = { collabs: '' }) {
const licenseMarkdown = generateMarkdown({ license: response.license });
    const content = `
# ${response['readMe-title']}

## Description
${response.Given}.

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Credits](#Credits)
- [Tests](#tests)

## Installation
${response.installation}.

## Usage
${response.usage}.

## Credits
${final.collabs || 'N/A'}.

## License
${licenseMarkdown}.

## Questions
If you have any questions, email me at ${response.email} or check out my GitHub at ${response.readMe_url}.

## Features
${response.readMe_features}.



## How to Contribute
${response.contribute}.

## Tests
${response.testing || 'N/A'}.
    `;
    writeToFile("README.md", content);
}
        if (response.confirm) {
            // If the user worked with others, prompt for collaborators
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Who else worked with you?',
                    name: 'collabs'
                }
            ]).then((final) => {
                handle(response, final);
            });
        } else {
            // Proceed without collaborators
            handle(response);
        }
    });