var input = 'yzbqklnj';

var crypto = require('crypto');

// Solving Part 1
var found = false;

for(var i = 0; found !== true; i++) {
    var hash = crypto.createHash('md5').update(input+i).digest('hex');

    if (hash.substring(0, 5) === '00000') {
        found = true;

        // Part 1 Answer
        console.log(i);
    }
}


// Solving Part 2
var found2 = false;

for(var i = 0; found2 !== true; i++) {
    var hash = crypto.createHash('md5').update(input+i).digest('hex');

    if (hash.substring(0, 6) === '000000') {
        found2 = true;

        // Part 2 Answer
        console.log(i);
    }
}
