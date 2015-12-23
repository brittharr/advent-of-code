var input = '1321131112';

// Solving Part 1
var output = input;
for (var i = 0; i < 40; i++) {
    var split = output.split(''),
        output = '',
        count = 1,
        currentChar = split[0];
    for (var j = 1; j <= split.length; j++) {
        if (split[j] == split[j-1]) {
            count++;
        } else {
            output += count + currentChar;
            count = 1;
            currentChar = split[j];
        }
    }
}

// Part 1 Answer
console.log(output.length);

// Solving Part 2
var outputBigger = input;
for (var i = 0; i < 50; i++) {
    var split = outputBigger.split(''),
        outputBigger = '',
        count = 1,
        currentChar = split[0];
    for (var j = 1; j <= split.length; j++) {
        if (split[j] == split[j-1]) {
            count++;
        } else {
            outputBigger += count + currentChar;
            count = 1;
            currentChar = split[j];
        }
    }
}

// Part 2 Answer
console.log(outputBigger.length);
