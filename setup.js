const prompt = require('prompt-sync')();
const fs = require('fs');

console.log("Setup Utility for Vue Questions");
console.log("-------------------------------");
let name = prompt("Enter your name: ");
let email = prompt("Enter your email address: ");

let configTemplate = `
let user = {
    'name': '${name}',
    'email': '${email}'
}

export default user;
`
fs.writeFileSync('config.js', configTemplate);
