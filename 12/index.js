var fs = require('fs');

var data = fs.readFileSync('input.json', 'utf-8');

var jsonData = JSON.parse(data);

// Solving Part 1
function lookForNumber(obj) {
    var tempSum = 0;
    for(var key in obj) {
        var val = obj[key];
        if (typeof val === 'number') tempSum += val;
        else if (typeof val === 'object') tempSum += lookForNumber(val);
    }
    return tempSum;
}

// Part 1 Answer
console.log(lookForNumber(jsonData));


// Solving Part 2
function lookForNonRedNumber(obj) {
    var tempSum = 0;

    if (Array.isArray(obj)) {
        obj.forEach(function(val){
            tempSum += lookForNonRedNumber(val);
        })
    } else if (typeof obj === 'object') {
        var containsRed = false;
        for(var key in obj) {
            if (obj[key] === "red") containsRed = true;
        }
        if (!containsRed) {
            for(var key in obj) {
                tempSum += lookForNonRedNumber(obj[key]);
            }
        }
    } else if (typeof obj === 'number') {
        tempSum += obj;
    }

    return tempSum;
}

// Part 2 Answer
console.log(lookForNonRedNumber(jsonData));
