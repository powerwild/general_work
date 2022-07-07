// const arr = [];


// const toHash = (str) => {
//     let index = 0;
//     for (let s of str) {
//         let sCode = s.charCodeAt();
//         index += sCode % 5;
//     }
//     return index;
// }

// const hashInsert = (key, value) => {
//     let i = toHash(key);
//     if (!arr[i]) return arr[i] = value;
//     while (true) {
//         if (!arr[i]) {
//             arr[i] = value;
//             break;
//         }
//         else i++;
//     }
//     return;
// };

// hashInsert('arrow', 'yes')
// hashInsert('worra', 'no')
// console.log(arr)


// function goodSegment(badNumbers, lower, upper) {
//     const bad = new Set();
//     for (let num of badNumbers) bad.add(num);
//     console.log(badNumbers)
//     console.log(lower)
//     console.log(upper)
//     let maxSegment = 0;
//     let start = lower;
//     for (let i = lower; i <= upper; i++) {
//         if (bad.has(i) || i === upper) {
//             const diff = i === upper && !bad.has(i) ? (i + 1) - start : i - start;
//             maxSegment = diff > maxSegment ? diff : maxSegment;
//             start = i + 1;
//         }
//     }
//     return maxSegment;
// }
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// readline.question(`What's your name? `, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
// });
