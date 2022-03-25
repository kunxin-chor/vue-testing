const prompt = require('prompt-sync')();
const axios = require('axios');
const fs = require('fs');
const BASE_API_URL="https://3000-johnbenedictyan-tgcresul-dmpmk4gpdjx.ws-us38.gitpod.io/";

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
            'jwt': '${response.data.token}'
        }

        export default user;
        `
    fs.writeFileSync('config.js', configTemplate);
    console.log("Setup done! Please log in reguarly!");
}
main();

