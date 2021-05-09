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
        name: 'license',
        message: 'Enter your license information from the following choices: Apache 2.0, Boost Software License 1.0, BSD 3-Clause License (Required)',
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('You need to enter your license information!');
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
        message: 'Enter your email address, a space, and your github profile link: (Required)',
        validate: questionsInput => {
          if (questionsInput) {
            return true;
          } else {
            console.log('You need to enter your contact link!');
            return false;
          }
        }
      },
  ]);
};

const promptProject = generatorData => {
  console.log(`

`);

  if (!generatorData.projects) {
    generatorData.projects = [];
  }
  return inquirer
      .prompt ([
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
    ])

    .then(projectData => {
      generatorData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(generatorData);
      } else {
        return generatorData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(generatorData => {
    return generatePage(generatorData);
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