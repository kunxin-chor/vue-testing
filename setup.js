const prompt = require('prompt-sync')();
const fs = require('fs');

console.log("Setup Utility for Vue Questions");
console.log("-------------------------------");
let name = prompt("Enter your name: ");
let email = prompt("Enter your email address: ");
let batch = prompt("Please enter your batch code (eg. tgc16, tgc15 etc.): ");

let configTemplate = `
let user = {
    'name': '${name}',
    'email': '${email}',
    'batch': '${batch}'
}

export default user;
`
fs.writeFileSync('config.js', configTemplate);
console.log("Student data updated.");
