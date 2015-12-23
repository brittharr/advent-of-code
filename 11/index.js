var input = 'vzbxkghb';

// Solving Part 1
function incrementPassword(pass) {
    var splitInput = pass.split('');

    var loop = false,
        i = splitInput.length - 1;
    do {
        var newChar = nextChar(splitInput[i]);
        splitInput[i] = newChar;
        if (newChar == 'a') {
            loop = true;
            i--;
        } else {
            loop = false;
        }
    } while (loop && i >= 0)

    return splitInput.join('');
}

function nextChar(c) {
    return c == 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1);
}

function matchesRules(pass) {
    var splitInput = pass.split('');

    // one increasing straight of at least three letters
    var charCodes = splitInput.map(function(c){ return c.charCodeAt(0); }),
        test1 = false;
    for(var i = 0; i < charCodes.length - 2; i++) {
        if (charCodes[i] == charCodes[i+1] - 1 && charCodes[i] == charCodes[i+2] - 2) test1 = true;
    }

    // no i, o, or l
    var test2 = pass.match(/^[^iol]+$/);

    // two sets of double letters, not the same letter
    var doubles = pass.match(/(\w)\1\w*(\w)\2/);
    var test3 = doubles && doubles[1] !== doubles[2];

    return test1 && test2 && test3;
}

// Part 1 Answer
var newInput = input;
do {
    newInput = incrementPassword(newInput)
} while(!matchesRules(newInput))

console.log(newInput);


// Part 2 Answer
var nextNewInput = newInput;
do {
    nextNewInput = incrementPassword(nextNewInput)
} while(!matchesRules(nextNewInput))

console.log(nextNewInput);
