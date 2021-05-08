// TODO: Include packages needed for this application
const generateMarkdown = require('./develop/utils/generateMarkdown.js');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
/*const questions = ['What is the title of your project', 'Please enter a description for your project:', 
'Please enter installation instructions for your project:', 'Please enter usage information for your project:', 
'Please list contribution guidelines for your project', 'Please enter test instructions for your project', 'Please choose a license:',
'Please enter your github username:', 'Please enter your email address:',]*/

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Please enter a description for your project:? (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter installation instructions for your project:? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information for your project:? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contr',
            message: 'Please enter contribution guidelines for your project:? (Required)',
            validate: contrInput => {
                if (contrInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidlelines for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter test instructions for your project:? (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Please choose a license for this project: (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },

    ])}




        // TODO: Create a function to write README file
    //function writeToFile(fileName, data) { };

    // TODO: Create a function to initialize app
    //function init() { };

    // Function call to initialize app
    //init();
    
