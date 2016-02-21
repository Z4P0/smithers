#!/usr/bin/env node

var fs = require('fs');
var say = require('say');
var path = require('path');
var open = require('open');
var clear = require('clear');
var moment = require('moment');
var program = require('commander');





/**
 * says hello and creates a new text file for the day
 */
function morning(shh) {

  var script = '';
  script += 'good morning, ' + process.env.USER + '.\n'; // say hello
  script += 'it\'s ' + moment().format('dddd, MMMM Do') + '.';  // date
  // to do: weather?

  clear();
  console.log(script);

  say.speak(script, 'Alex', undefined, function(err) {
    if (err) throw err;
    today();
  });

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



/**
 * open yesterday's file, if itexists
 * @return {[type]} [description]
 */
function yesterday() {

  var filename = moment().subtract(1, 'days').format('MMM-DD').toLowerCase() + '.txt';
  var filePath = path.join(process.env.NOTEBOOK, filename);

  // open file, only if it exitst. do not create one if it doesn't exist already
  fs.stat(filePath, function(err, stats) {
    if (err) console.log('no file for yesterday');
    else open(filePath);
  });

}




// i don't think i did this right... /shrug
program
  .version('0.0.1')
  .command('morning')
  .action(morning);
program
  .command('today')
  .action(today);
program
  .command('yesterday')
  .action(yesterday);

program.parse(process.argv);
