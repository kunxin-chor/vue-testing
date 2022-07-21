const prompt = require('prompt-sync')();
const axios = require('axios');
const fs = require('fs');
const config = require('./config')
const BASE_API_URL=config.BASE_API_URL;

async function main() {
    console.log("Setup Utility for Vue Questions");
    console.log("-------------------------------");
    let email = prompt("Enter your email address: ");
    let password = prompt.hide("Please enter your password: ");
    let response = await axios.post(BASE_API_URL + "api/users/login",{
        email, password
    })

    let configTemplate = `
let user = {
    'email': '${email}',
    'jwt': '${response.data.accessToken}'
}

module.exports = user;
        `
    fs.writeFileSync('user.js', configTemplate);
    console.log("Setup done! Please log in reguarly!");
}
main();

