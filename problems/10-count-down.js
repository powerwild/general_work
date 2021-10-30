/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:



console.log(countDownTimer(0)); // prints "Happy New Year!"

let oneDay = countDownTimer(1); // returns a function
console.log(oneDay);
console.log(oneDay()); // prints "Happy New Year!"


let twoDays = countDownTimer(2); // returns a function
console.log(twoDays);
console.log(twoDays()); // returns a function
console.log(twoDays()); // prints "Happy New Year!"

let threeDays = countDownTimer(3); // returns a function
console.log(threeDays);
console.log(threeDays()); // returns a function
console.log(threeDays()); // returns a function
console.log(threeDays()); // prints "Happy New Year!

***********************************************************************/

// function countDownTimer(n) {
//   let count = Math.abs(n);
//   return function counter() {
//     if (count === 0) return console.log("Happy New Year!");
//     count -= 1;
//     return counter;
//   }
// };
function countDownTimer(num) {
  if (num === 0) return 'Happy New Year!';
  const _count = () => {
    num -= 1;
    if (num <= 0) {
      return 'Happy New Year!';
    } else {
      return _count;
    }
  };
  return _count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = countDownTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
