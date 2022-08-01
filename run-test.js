const { spawn } = require("child_process");
const testName = process.argv[2];

spawn('npm', [`run`, `test:unit`, `--prefix`,  `./${testName}`], {stdio:'inherit'})
  .on('exit', function (error) {

    if(!error){
      console.log('Success!');
    }

    }
  );