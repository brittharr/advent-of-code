var fs = require('fs');

var data = fs.readFileSync('input.txt', 'utf-8');

var strings = data.split('\n');

// Solving Part 1
var niceCount = 0;
for(var i = 0; i < strings.length; i++) {
    // vowels
    var vowelMatch = strings[i].match(/[aeiou]/g),
        vowels = vowelMatch !== null && vowelMatch.length >= 3;

    // single letter twice
    var doubleLetter = strings[i].match(/([\w])\1/g) !== null;

    // don't want these pairs
    var noBadPairs = !strings[i].match(/(ab|cd|pq|xy)/g);

    if (vowels && doubleLetter && noBadPairs) niceCount++;
}

// Part 1 Answer
console.log(niceCount);

// Solving Part 2
var superNiceCount = 0;
for(var i = 0; i < strings.length; i++) {
    // repeat a pair twice
    var pairTwice = strings[i].match(/(\w\w)[\w]*\1/);

    // repeat a letter with one letter between
    var letterSpace = strings[i].match(/(\w)[\w]\1/);

    if (pairTwice && letterSpace) superNiceCount++;
}

// Part 2 Answer
console.log(superNiceCount);
