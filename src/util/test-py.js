const spawn = require('child_process').spawn;

const test="hello world";

const process = spawn('python', ['test.py', test]);
process.stdout.on('data', (data) => {
  test = data.toString();
});

// process.stderr.on('data', (data) => {
//   console.log('err results: %j', data.toString('utf8'))
// });

process.stdout.on('end', function(){
  console.log(test);
});