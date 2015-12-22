var fs = require('fs');

fs.readFile('input.txt', 'utf-8', function (err, data) {
    if (err) throw err;

    var dimensions = data.split('\n');

    var totalSqFt = 0,
        totalRibbonLength = 0;
    dimensions.forEach(function(value) {
        var splitDim = value.split('x');

        // Solving Part 1
        if (splitDim.length == 3) {
            var sides = [splitDim[0]*splitDim[1], splitDim[1]*splitDim[2], splitDim[0]*splitDim[2]];
            totalSqFt += 2*sides[0] + 2*sides[1] + 2*sides[2] + Math.min.apply(null, sides);
        }

        // Solving Part 2
        if (splitDim.length == 3) {
            splitDim.sort(function(a,b){ return a - b; });
            totalRibbonLength += 2*splitDim[0] + 2*splitDim[1] + splitDim[0]*splitDim[1]*splitDim[2];
        }
    });

    // Part 1 Answer
    console.log(totalSqFt);

    // Part 2 Answer
    console.log(totalRibbonLength);
});
