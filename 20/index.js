var input = 34000000;

// Solving Part 1
var numberOfPresents = function(houseNum) {
    var presents = 0;
    for(var i = 1; i <= houseNum; i++) {
        if (houseNum%i === 0) presents += i*10;
    }

    return presents;
}

// Part 1 Answer
// var i = 0;
// while (numberOfPresents(i) < input) {
//     i++;
// }
// console.log(i);
// Answer: 786240
// This took 5ever

// Solving Part 2
var numberOfPresentsFinite = function(houseNum) {
    var presents = 0;
    for(var i = 1; i <= houseNum ); i++) {
        if (houseNum%i === 0 && i*50 >= houseNum) presents += i*11;
    }

    return presents;
}

// Part 2 Answer
var i = 0;
while (numberOfPresentsFinite(i) < input) {
    i++;
    console.log(i);
}

