#!/usr/bin/env node

var say = require('say');
var program = require('commander');
var moment = require('moment');

/**
 * says hello and creates a new text file for the day
 */
function morning () {

  var now = moment();
  var script = '';

  // good morning, $user
  script += 'good morning, ' + process.env.USER + '.\n';

  // it's sunday february 21
  script += 'it\'s ' + now.format('dddd, MMMM Do') + '.';

  console.log(script);
  say.speak(script);


//   touch $TODAYS_FILE
//   today

}

morning();

// the today command

// export NOTEBOOK=~/notebook

// # generate the filename for today
// MONTH=$(echo $(date '+%b') | tr '[A-Z]' '[a-z]')
// DAY=$(date '+%d')
// # ~/notebook/oct-15.txt
// export TODAYS_FILE=$NOTEBOOK/$MONTH-$DAY.txt




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



// use default voice in System Preferences
// say.speak('Hello!');

// // no callback, fire and forget
// say.speak('whats up, dog?', 'Alex', 20);

// // output some text to the console as the callback
// say.speak('whats up, dog?', 'Good News', undefined, function(error) {
//   if (error) {
//     return console.log(error);
//   }

//   console.log('text to speech complete');
// });



// # reopen the text file for today
// function today {
//   # check if there is one for today
//   if [ ! -f $TODAYS_FILE ]; then
//       echo "creating file..."
//   fi
//   subl $TODAYS_FILE
// }






// yesterday
