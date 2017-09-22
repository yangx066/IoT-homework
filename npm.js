var prompt = require('prompt');
var writeFile = require('write-file')



  prompt.start();

  prompt.get(['Name', 'Age'], function (err, result) {
    writeFile('/Users/yang/Documents/MFADT/2017fall/IoT/week4/npm.txt', 'Name: ' + result.Name +'\n'+'Age: ' + result.Age, function (err) {
  if (err) return console.log(err)
    console.log('file is written')
})
  });


