const inquirer = require('inquirer');

const fs = require('fs');
const generatePage = require('./src/page-template.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'yourname',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'address',
            message: 'What is your address?'
        },
        {
            type: 'input',
            name: 'cityState',
            message: 'What is your city, state?'
        },
        {
            type: 'input',
            name: 'zip',
            message: 'What is your zip code?'
        }
    ]);
};


const promptReport = () => {
    console.log(`

    ***************************
    *    Add Report Items     *
    *                         *
    * *************************
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'kitchen',
            message: 'List the items in the kitchen?'
        },
        {
            type: 'input',
            name: 'bathroom',
            message: 'List the items in the bathroom?'
        },
        {
            type: 'input',
            name: 'familyroom',
            message: 'list items in the family room?'
        },
        {
            type: 'checkbox',
            name: 'typeHouse',
            message: 'What type of house?',
            choices: ['Oakmont', 'Devon', 'Ashford', 'Lake Ridge I', 'Lake Ridge II', 'Dorchester']
        }
    ]);
};

const writeFile = () => {
    const pageHTML = generatePage(yourname, address, zip, kitchen, bathroom, familyroom, typeHouse);

    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw err;
    
        console.log('The file was created!')
    })
};

promptUser()
    .then(promptReport)
    .then(writeFile);
    


// process.argv.slice(2) gets input from the terminal
// const profileDataArg = process.argv.slice(2);
// const [firstN, lastN, addr, cty, state, zp]  = profileDataArg;
