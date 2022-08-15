const { spawn } = require("child_process");
const testName = process.argv[2];

const cmd = process.platform == 'win32' ? 'npm.cmd' : 'npm';

spawn(cmd, [`run`, `-s`, `test:unit`, `--prefix`,  `./${testName}`], {stdio:'inherit'})
  .on('exit', function (error) {

    if(!error){
      console.log('Success!');
    }

    }
  );