var fs = require('fs');

fs.readFile('./hello.js', 'utf-8', function (err, data) {
  if (!err) {
    console.log(data);
  }
});
console.log("== This is after fs.readFile()");

var contents = fs.readFileSync('./files.js', 'utf-8');
console.log(contents);
console.log("== This is after fs.readFileSync()");
