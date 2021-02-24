const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArg = process.argv.slice(2);
const [firstN, lastN, addr, cty, state, zp]  = profileDataArg;


fs.writeFile('./dist/index.html', generatePage(firstN, lastN, addr, cty, state, zp), err => {
    if (err) throw err;

    console.log('The file was created!')
});