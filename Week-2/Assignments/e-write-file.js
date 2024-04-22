// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs');

function writeToFile(filename, content) {
  fs.writeFile(filename, content, 'utf8', (err) => {
    console.log('Write operation completed.');
  });
}

const content = 'hello     world    my    name   is       raman';
writeToFile('random.txt', content);
