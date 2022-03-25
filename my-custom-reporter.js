
const config = require('./config.js');
const axios = require('axios');
const fs = require('fs');




class MyCustomReporter {
    constructor(globalConfig, options) {
      this._globalConfig = globalConfig;
      this._options = options;
    }
  
    onRunComplete(contexts, results) {

      if (!fs.existsSync('./user.js')) {
        console.log("You are not logged in, therefore results won't submitted.");
        console.log("To login, please run 'node setup.js'");
        return;
      }
      const user = require('./user.js');
      

      // console.log('Custom reporter output:');
      //console.log('Contexts: ', contexts);
      //  console.log('GlobalConfig: ', this._globalConfig);
       const rootDir = this._globalConfig.rootDir;
       const chunks = rootDir.split('/');
       const questionCode = chunks[chunks.length - 1];
       
       async function sendSubmission() {
         const endpoint = config.BASE_API_URL + `api/tutorials/${config.tutorialCode}/questions/${questionCode}`
         console.log("endpoint => ", endpoint);
         let response = await axios.post(endpoint,{
           'results':"passed"
         },{
          headers: {
            'Authorization': `Basic ${user.jwt}` 
          }
         })
         console.log(response.data);
       }
       sendSubmission();


      // console.log('Options: ', this._options);
      // console.log('Results:', results);
    }
  }
  
  module.exports = MyCustomReporter;