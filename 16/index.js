var fs = require('fs');

var data = fs.readFileSync('input.txt', 'utf-8');

var memory = data.split('\n');

// Solving Part 1
var aunts = {};

var giftGiver = {
    'children': 3,
    'cats': 7,
    'samoyeds': 2,
    'pomeranians': 3,
    'akitas': 0,
    'vizslas': 0,
    'goldfish': 5,
    'trees': 3,
    'cars': 2,
    'perfumes': 1
};

memory.forEach(function(line, index) {
    if (line !== '') {
        var attrs = line.substring(line.indexOf(': ')+2).split(', ');

        aunts[index+1] = {};

        attrs.forEach(function(attribute) {
            var that = attribute.split(': ');
            aunts[index+1][that[0]] = +that[1];
        });
    }
});

// Part 1 Answer
for(var aunt in aunts) {
    var isThisTheAunt = true;

    for(var key in aunts[aunt]){
        if (giftGiver[key] != aunts[aunt][key]) isThisTheAunt = false;
    }

    if (isThisTheAunt) console.log(aunt);
}


// Part 2 Answer
for(var aunt in aunts) {
    var isThisTheAunt = true;

    for(var key in aunts[aunt]){
        switch (key) {
            case 'cats':
            case 'trees':
                if (giftGiver[key] >= aunts[aunt][key]) isThisTheAunt = false;
                break;
            case 'pomeranians':
            case 'goldfish':
                if (giftGiver[key] <= aunts[aunt][key]) isThisTheAunt = false;
                break;
            default:
                if (giftGiver[key] != aunts[aunt][key]) isThisTheAunt = false;
                break;
        }
    }

    if (isThisTheAunt) console.log(aunt);
}
