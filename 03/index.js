var fs = require('fs');

fs.readFile('input.txt', 'utf-8', function (err, data) {
    if (err) throw err;

    var directions = data.split('');

    // Solving Part 1
    var currentX = 0,
        currentY = 0,
        visitedHouses = [];
    directions.forEach(function(value){
        if (visitedHouses.indexOf(currentX + ',' + currentY) === -1) visitedHouses.push(currentX + ',' + currentY);

        switch (value) {
            case '^':
                currentY++;
                break;
            case 'v':
                currentY--;
                break;
            case '<':
                currentX--;
                break;
            case '>':
                currentX++;
                break;
            default:
                break;
        }
    });

    // Solving Part 2
    var santaX = [0,0],
        santaY = [0,0],
        santaHouses = [];
    directions.forEach(function(value, index){
        var i = index%2

        if (santaHouses.indexOf(santaX[i] + ',' + santaY[i]) === -1) santaHouses.push(santaX[i] + ',' + santaY[i]);

        switch (value) {
            case '^':
                santaY[i]++;
                break;
            case 'v':
                santaY[i]--;
                break;
            case '<':
                santaX[i]--;
                break;
            case '>':
                santaX[i]++;
                break;
            default:
                break;
        }
    });

    // Part 1 Answer
    console.log(visitedHouses.length);

    // Part 2 Answer
    console.log(santaHouses.length);
});
