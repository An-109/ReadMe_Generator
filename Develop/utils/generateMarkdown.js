// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'MIT') {
  return(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
}else if(license === 'GPL'){
  return('');
}else if(license === 'Apache'){
  return('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
}else if(license === 'BSD'){
  return('[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)');
}else if(license === 'LGPL'){
  return('[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)');
}else if(license === 'MPL'){
  return('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
}else{
  return('');
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `This project is licensed under the MIT License. See ` +
           `[LICENSE](https://opensource.org/licenses/MIT) for details.`;
  } else if (license === 'GPL') {
    return `This project is licensed under the GPL License. See ` +
           `[LICENSE](https://www.gnu.org/licenses/gpl-3.0) for details.`;
  } else if (license === 'Apache') {
    return `This project is licensed under the Apache License 2.0. See ` +
           `[LICENSE](https://opensource.org/licenses/Apache-2.0) for details.`;
  } else if (license === 'BSD') {
    return `This project is licensed under the BSD 3-Clause License. See ` +
           `[LICENSE](https://opensource.org/licenses/BSD-3-Clause) for details.`;
  } else if (license === 'LGPL') {
    return `This project is licensed under the LGPL License. See ` +
           `[LICENSE](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) for details.`;
  } else if (license === 'MPL') {
    return `This project is licensed under the MPL 2.0 License. See ` +
           `[LICENSE](https://opensource.org/licenses/MPL-2.0) for details.`;
  } else {
    return('');
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License\n\n${renderLicenseLink(license)}`;
  } else {
    return('');
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `

${badge}



${licenseSection}
  `;
}
export default generateMarkdown;
