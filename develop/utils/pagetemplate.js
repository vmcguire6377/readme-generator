
// create the page content section
/*const generateContents = contentsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Table of Contents</h2>
      <div class="flex-row justify-space-between">
      <nav>
      <ul>
        <li>
          <a href="desc">Description</a>
      </li>
      <li>
          <a href="install">Installation Instructions</a>
      </li>
      <li>
          <a href="usage">Usage Information</a>
      </li>
      <li>
          <a href="license">License Information</a>
      </li>
      <li>
          <a href="contribution">Contribution Information</a>
      </li>
      <li>
          <a href="tests">Testing Procedures</a>
      </li>
      <li>
          <a href="questions">Questions</a>
      </li>
      </ul>
      </nav>

`;
};*/   
    
 
// create the description section
const generateDesc = descText => {
  if (!descText) {
    return '';
  }

  return `
    <section class="my-3" id="desc">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Description</h2>
      <p>${descText}</p>
    </section>
  `;
};
// create the install section
const generateInstall = installText => {
  if (!installText) {
    return '';
  }

  return `
    <section class="my-3" id="desc">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Installation Instructions</h2>
      <p>${installText}</p>
    </section>
  `;
};
// create the usage section
const generateUsage = usageText => {
  if (!usageText) {
    return '';
  }

  return `
    <section class="my-3" id="desc">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Usage Information</h2>
      <p>${usageText}</p>
    </section>
  `;
};
// create the license section
// create the projects section

const generateLicense = licenseText => {
  if (!licenseText) {
    return 'License Information';
  }

  return `
    <section class="my-3" id="desc">
      <h2 class="text-dark bg-primary p-2 display-inline-block">License Information</h2>
      <p>${licenseText}</p>
    </section>
  `;
};

// create the contribution section
const generateContribution = contributionText => {
  if (!contributionText) {
    return '';
  }

  return `
    <section class="my-3" id="desc">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Contribution Information</h2>
      <p>${contributionText}</p>
    </section>
  `;
};
// create the tests section
const generateTests = testsText => {
  if (!testsText) {
    return '';
  }

  return `
    <section class="my-3" id="desc">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Testing Information</h2>
      <p>${testsText}</p>
    </section>
  `;
};
// create the questions section
const generateQuestions = questionsText => {
  if (!questionsText) {
    return '';
  }

  return `
    <section class="my-3" id="desc">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Questions? Access the following contact information</h2>
      <p>${questionsText}</p>
    </section>
  `;
};
// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projects, desc, install, usage, license, contribution, tests, questions, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
    
      
    ${generateDesc(desc)}
      ${generateInstall(install)}
      ${generateUsage(usage)}
      ${generateLicense(license)}
      ${generateContribution(contribution)}
      ${generateTests(tests)}
      ${generateQuestions(questions)}
      
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};