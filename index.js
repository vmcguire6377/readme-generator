const inquirer = require('inquirer');
const generatePage = require('./develop/utils/pagetemplate.js');
const { writeFile, copyFile } = require('./develop/utils/generatesite.js');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Enter your project description: (Required)',
      validate: projectInput => {
        if (projectInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter your installation instructions: (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter your installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your usage information: (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to enter your usage information!');
            return false;
          }
        }
      },
     
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution information: (Required)',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('You need to enter your contribution information!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter your testing information: (Required)',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('You need to enter your testing information!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Enter your github profile link: (Required)',
        message: 'Enter your fksjlemail address: (Required)',
        validate: questionsInput => {
          if (questionsInput) {
            return true;
          } else {
            console.log('You need to enter your github profile link!');
            return false;
          }
        }
      },
      /*{
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide a description for your project:',
      when: ({ confirmDesc }) => confirmDesc
    }*/
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your usage information: (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to enter your usage information!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution information (Required)',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('You need to enter contribution information!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Select your license information: (Check all that apply)',
        choices: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });