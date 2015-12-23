var fs = require('fs');

var data = fs.readFileSync('input.txt', 'utf-8');

var instructions = data.split('\n');
instructions.pop();

// Solving Part 1
var registers = {
    a: 0,
    b: 0
};
var i = 0;
while (i < instructions.length) {
    console.log(i+1);
    var incrementAmount = 1;

    var instruction = instructions[i],
        register = instruction.substr(4,1);
    switch (instruction.substr(0,3)) {
        case "hlf":
            registers[register] /= 2;
            break;
        case "tpl":
            registers[register] *= 3;
            break;
        case "inc":
            registers[register] += 1;
            break;
        case "jmp":
            incrementAmount = +instruction.substr(4);
            break;
        case "jie":
            if (registers[register]%2 === 0) incrementAmount = +instruction.substr(7);
            break;
        case "jio":
            if (registers[register] === 1) incrementAmount = +instruction.substr(7);
            break;
    }
    i += incrementAmount;
}

// Part 1 Answer
console.log(registers);

// Solving Part 2
var registersTwo = {
    a: 1,
    b: 0
};
var i = 0;
while (i < instructions.length) {
    console.log(i+1);
    var incrementAmount = 1;

    var instruction = instructions[i],
        register = instruction.substr(4,1);
    switch (instruction.substr(0,3)) {
        case "hlf":
            registersTwo[register] /= 2;
            break;
        case "tpl":
            registersTwo[register] *= 3;
            break;
        case "inc":
            registersTwo[register] += 1;
            break;
        case "jmp":
            incrementAmount = +instruction.substr(4);
            break;
        case "jie":
            if (registersTwo[register]%2 === 0) incrementAmount = +instruction.substr(7);
            break;
        case "jio":
            if (registersTwo[register] === 1) incrementAmount = +instruction.substr(7);
            break;
    }
    i += incrementAmount;
}

// Part 2 Answer
console.log(registersTwo);
