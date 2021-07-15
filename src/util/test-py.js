var spawn = require('child_process').spawn;
const process = spawn('python', ['script.py', text]);
process.stdout.on('data', (data) => {
  test = data.toString();
});
process.stderr.on('data', (data) => {
  console.log('err results: %j', data.toString('utf8'))
});
process.stdout.on('end', function(){
  console.log('Test Data', test);
});