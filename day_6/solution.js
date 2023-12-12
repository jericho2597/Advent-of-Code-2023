const input = `Time:        40     82     91     66
Distance:   277   1338   1349   1063`;

const calculatePermutations = (time, distance) => {
    let permutations = 0;

    for (let chargingSeconds = Math.round(time / 2); chargingSeconds <= time; chargingSeconds++) {
        //console.log("Charging seconds: " + chargingSeconds);
        //console.log("Distance:  (" + chargingSeconds + " * " + (time - chargingSeconds) + " = " + (chargingSeconds * (time - chargingSeconds)) + ")")

        if (chargingSeconds * (time - chargingSeconds) > distance) {
            //console.log("Valid")
            if (chargingSeconds == Math.round(time / 2) && time % 2 == 0) {
                permutations += 1
            }
            else {
                permutations += 2
            }
        }
        else {
            //console.log("Break");
            break;
        }
    }

    return permutations;
}

const processPartOne = (input) => {
    const lines = input.split('\n');
    const times = lines[0].split(/\s+/);
    const distances = lines[1].split(/\s+/);

    let sum = 1;
    for (let i = 1; i < times.length; i++) {
        sum = sum * calculatePermutations(times[i], distances[i]);
    }
    console.log("Part one: " + sum);
};

const processPartTwo = (input) => {
    const lines = input.split('\n');
    const times = lines[0].split(/\s+/);
    const distances = lines[1].split(/\s+/);

    let time = '';
    let distance = '';

    for (let i = 1; i < times.length; i++) {
        time += times[i];
        distance += distances[i];
    }
    console.log("Part two: " + calculatePermutations(parseInt(time), parseInt(distance)));
};

processPartOne(input);
processPartTwo(input);