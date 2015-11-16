// Dependencies
const bufferify = require("../lib");

// A function that returns a unique random number after one second
function getUniqueRand(prefix, callback) {
    setTimeout(() => {
        callback(prefix + Math.random());
    }, 1000);
}

// Bufferify the function, making it generate the number once, and
// call all the callback functions then
var fn = bufferify(getUniqueRand, ["Random number is: "]);

fn(console.log);
// => Random number is: 0.3325996194034815

fn(console.log);
// => Random number is: 0.3325996194034815

fn(console.log);
// => Random number is: 0.3325996194034815

fn(console.log);
// => Random number is: 0.3325996194034815
