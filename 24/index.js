var Combinatorics = require('js-combinatorics');

var input = [1,2,3,5,7,13,17,19,23,29,31,37,41,43,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113],
    numberOfTrips = 3; // For Part 2, change this to 4

// Solving Part 1
var presentsPerTrip = input.reduce(function(a,b){ return a + b; }) / numberOfTrips;

var calculateQE = function(arr) { return arr.reduce(function(a,b){ return a*b; }, 1)};

var allCombinations = [];

for (var n = 1; n < (input.length - 1 - numberOfTrips)/numberOfTrips; n++) {
    var combinations = [];
    var correctWeight = Combinatorics.combination(input, n).toArray().filter(function(d){ return d.reduce(function(a,b){ return a + b}) === presentsPerTrip});
    for (var trip in correctWeight) {
        combinations.push({size: n, QE: calculateQE(correctWeight[trip])})
    }
    allCombinations = allCombinations.concat(combinations.sort(function(a,b){ return a.QE - b.QE; }));
}

// Part 1 Answer
console.log(allCombinations[0]);
