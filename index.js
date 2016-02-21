#!/usr/bin/env node

var say = require('say');
var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);



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




// say.speak('good morning, ' + process.env.USER, 'Kathy', 120);
say.speak('good morning, ' + process.env.USER);

// the today command

// export NOTEBOOK=~/notebook

// # generate the filename for today
// MONTH=$(echo $(date '+%b') | tr '[A-Z]' '[a-z]')
// DAY=$(date '+%d')
// # ~/notebook/oct-15.txt
// export TODAYS_FILE=$NOTEBOOK/$MONTH-$DAY.txt

// # we only create a new file if we run the 'morning' command
// function morning {
//   SCRIPT="good mornin' $USER. it's $(date '+%A, %B %e')"

//   touch $TODAYS_FILE

//   clear
//   echo
//   echo $SCRIPT
//   say $SCRIPT
//   echo
//   today
// }

// # reopen the text file for today
// function today {
//   # check if there is one for today
//   if [ ! -f $TODAYS_FILE ]; then
//       echo "creating file..."
//   fi
//   subl $TODAYS_FILE
// }






// yesterday
