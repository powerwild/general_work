
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNumber;
let numAttempts;


function checkGuess(num) {
    if (num > secretNumber) {
        console.log(`too high.`);
        return false;
    } else if (num < secretNumber) {
        console.log(`too low.`);
        return false;
    } else if (num == secretNumber) {
        console.log(`correct`);
        return true;
    } else {
        console.log('Input was not a number.');
        return false;
    }
}

function askGuess() {
    console.log(`You have ${numAttempts} remaining`);
    if (numAttempts === 0) {
        console.log('no more attempts :(');
        console.log(`The answer was ${secretNumber}`);
        console.log('You lose')
        return rl.close();
    }
    rl.question('Enter a guess: ', answer => {
        const checker = checkGuess(Math.abs(answer));
        if (checker) {
            console.log('You Win!')
            rl.close();
        } else {
            numAttempts--;
            askGuess();
        }
    })
};

function randomInRange(min, max) {
    let range = max - min;
    return min + Math.floor(Math.random() * (range + 1))
};

function askRange() {
    rl.question('Enter a max number: ', max => {
        rl.question('Enter a min value: ', min => {
            console.log(`I'm thinking of a num between ${min} and ${max}...`);
            secretNumber = randomInRange(Number(min), Number(max));
            // console.log(secretNumber);
            askLimit();
        });
    });
};


function askLimit() {
    rl.question('Enter turn limit: ', limit => {
        console.log(`You have ${limit} attempts remaining`);
        numAttempts = Number(limit);
        askGuess();
    });
};
askRange();
