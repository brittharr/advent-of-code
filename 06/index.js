var fs = require('fs');

var data = fs.readFileSync('input.txt', 'utf-8');

var instructions = data.split('\n');


// Solving Part 1
var sizeOfSquare = 1000;
var lights = {};
for(var i = 0; i < sizeOfSquare; i++) {
    for(var j = 0; j < sizeOfSquare; j++) {
        lights[i+','+j] = 0;
    }
}

for(var i = 0; i < instructions.length; i++) {
    if (instructions[i] == '') break;
    var o = {pos: instructions[i].match(/\d+/g), command: instructions[i].match(/^([a-z]|\s)+/g)[0].trim()};

    for(var x = +o.pos[0]; x <= +o.pos[2]; x++) {
        for(var y = +o.pos[1]; y <= +o.pos[3]; y++) {
            switch (o.command) {
                case "turn on":
                    lights[x+','+y] = 1;
                    break;
                case "turn off":
                    lights[x+','+y] = 0;
                    break;
                case "toggle":
                    lights[x+','+y] ^= 1;
                    break;
            }
        }
    }
}

// Part 1 Answer
var lightsCount = 0;
for(var i = 0; i < sizeOfSquare; i++) {
    for(var j = 0; j < sizeOfSquare; j++) {
        lightsCount += lights[i+','+j];
    }
}
console.log(lightsCount);



// Solving Part 2
var brightLights = {};
for(var i = 0; i < sizeOfSquare; i++) {
    for(var j = 0; j < sizeOfSquare; j++) {
        brightLights[i+','+j] = 0;
    }
}

for(var i = 0; i < instructions.length; i++) {
    if (instructions[i] == '') break;
    var o = {pos: instructions[i].match(/\d+/g), command: instructions[i].match(/^([a-z]|\s)+/g)[0].trim()};

    for(var x = +o.pos[0]; x <= +o.pos[2]; x++) {
        for(var y = +o.pos[1]; y <= +o.pos[3]; y++) {
            switch (o.command) {
                case "turn on":
                    brightLights[x+','+y] += 1;
                    break;
                case "turn off":
                    brightLights[x+','+y] = Math.max(brightLights[x+','+y] - 1, 0);
                    break;
                case "toggle":
                    brightLights[x+','+y] += 2;
                    break;
            }
        }
    }
}

// Part 2 Answer
var brightLightsCount = 0;
for(var i = 0; i < sizeOfSquare; i++) {
    for(var j = 0; j < sizeOfSquare; j++) {
        brightLightsCount += brightLights[i+','+j];
    }
}
console.log(brightLightsCount);
