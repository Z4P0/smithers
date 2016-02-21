#!/usr/bin/env node

var say = require('say');
var program = require('commander');  // * to finish
var moment = require('moment');
var fs = require('fs');
var path = require('path');
var open = require('open');


/**
 * says hello and creates a new text file for the day
 */
function morning() {

  var script = '';
  script += 'good morning, ' + process.env.USER + '.\n'; // say hello
  script += 'it\'s ' + moment().format('dddd, MMMM Do') + '.';  // date
  // to do: weather?

  console.log(script);
  say.speak(script);

  today();
}


/**
 * open the text file for the day
 */
function today() {

  // filename
  var filename = moment().format('MMM-DD').toLowerCase() + '.txt';
  var filePath = path.join(process.env.NOTEBOOK, filename);

  // open file, create one if it doesn't exits
  fs.stat(filePath, function(err, stats) {
    // create the file if err
    if (err) {
      fs.writeFile(filePath, '', function(err) {
        if (err) throw err;
        open(filePath);
      });
    } else {
      open(filePath);
    }
  });
}



function yesterday() {

  var filename = moment().subtract(1, 'days').format('MMM-DD').toLowerCase() + '.txt';
  var filePath = path.join(process.env.NOTEBOOK, filename);

  // open file, only if it exitst. do not create one if it doesn't exist already
  fs.stat(filePath, function(err, stats) {
    if (err) console.log('no file for yesterday');
    else open(filePath);
  });
}






// program
//   .version('0.0.1')
//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq-sauce', 'Add bbq sauce')
//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//   .parse(process.argv);

// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);
