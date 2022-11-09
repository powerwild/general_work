// function removeNonDigits(str) {
//     return str.replace(/\D/g, "")
// }

// function cleansePhoneNumber(phone) {
//     // remove parenthesis, hyphens, periods, etc
//     var cleansedPhone = removeNonDigits(phone)
//     /*
//     **From**: You
//     **To**: Sandy
//     **CC**: Leslie
//     **Subject**: re: File upload broken - help!

//     I noticed that there are phone numbers missing area codes. To remedy this problem:
//     1. We could manually insert the correct area codes for all phone numbers that are missing them, but with the time constraints this might not be tangible at the moment.
//     2. We could provide a generic area code, such as 000, to be used in the code as needed, but the client would need to approve this first as it could be seen as falsifying the data.
//     3. We could alter our code to overlook the phone number completely if  it does not contain an area code.
//     4. I believe that our fastest option at the moment, without altering the data, would be to alter some our code to allow phone numbers to be either 10 digits(with area code) or 7 digits(without area code) long.

//     Hope this helps,
//     Casey Spears
//     */
//     // empty is OK
//     if (cleansedPhone !== "" && cleansedPhone.length !== 10 && cleansedPhone.length !== 7) {
//       console.log(cleansedPhone)
//       throw new Error("Invalid phone number!")
//     }

//     return cleansedPhone
// }

//   // NOTE: Feel free to test other phone numbers to figure out what's happening
// function main() {
//     console.log(cleansePhoneNumber("(123) 456-7890"))
//     console.log(cleansePhoneNumber("123-456-7890"))
//     console.log(cleansePhoneNumber("456-7890"))
// }


// const commonHosts = [
//     "aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com", "google.com", "hotmail.com", "hotmail.co.uk", "live.com","mac.com", "me.com", "mail.com", "msn.com", "outlook.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk"
// ]

// function hostForEmail(email) {
//     var emailArray = email.split("@");
//     return emailArray[emailArray.length - 1];
// }

// function isCommonEmailHost(email) {
//     var host = hostForEmail(email);

//     /*
//     During the iteration of the commonHosts array the else statement was causing the match to
//     be false for every provider that was not the one being searched for.
//     This was causing the function to return false unless the provider being matched was the last one of the array.
//     I removed the match variable and set the loop to return true as soon as a match is found to reduce the time spent traversing
//     the array otherwise the function will return false if the entire array is traversed without a match being found.
//     */
//     let i = 0;
//     while (i < commonHosts.length) {
//       if (commonHosts[i] === host) {
//         return true;
//       }
//       i++;
//     }
//     return false;
// }


// function removePunctuation(str) {
//     return str.replace(/[^\w\s-]/g, '')
//   }
//   function isSuffix(str) {
//     const suffix = ['Sr', 'Jr', 'II', 'III', 'IV'];
//     for (let s of suffix) {
//       if (s.toLowerCase() === str.toLowerCase()) return true;
//     }
//     return false;
//   }
//   function nameToParts(name) {
//     const results = [];
//     const names = name.split(' ');
//     let i = 0;
//     let j = 0;
//     while (j < 5) {
//       let char = '';
//       if (i === 0 || i === 2) {
//         char = removePunctuation(names[i]);
//         ++j;
//       }
//       if (i === 1) {
//         if ((names[i].length < 2 || names[i][1] === '.')) {
//           char = removePunctuation(names[i]);
//           ++j;
//         }
//       }
//       if (i === 3) {
//         if (i < names.length && isSuffix(names[i])) {
//           char = removePunctuation(names[i]);
//         }
//         j = 5;
//       }
//       results.push(char);
//       ++i;
//     }
//     return results;
//   }


// function closedPaths(number) {
//     // const map = {
//     //     '0': 1,
//     //     '4': 1,
//     //     '6': 1,
//     //     '9': 1,
//     //     '8': 2
//     // };
//     // number = String(number);
//     // let total = 0;
//     // for (let i = 0; i < number; ++i) {
//     //     if (map[number[i]]) total += map[number[i]];
//     // }
//     // return total;
//     const map = {
//         0: 1,
//         4: 1,
//         6: 1,
//         9: 1,
//         8: 2
//     };
//     let total = 0;
//     while (number > 0) {
//         let curr = number % 10;
//         number = Math.floor(number / 10);
//         if (map[curr]) total += map[curr];
//     }
//     return total;
// }
// function closedPaths(number) {
//     const map = {
//         '0': 1,
//         '4': 1,
//         '6': 1,
//         '9': 1,
//         '8': 2
//     };
//     number = number.toString().split('');
//     let total = 0;
//     for (let i = 0; i < number; ++i) {
//         if (map[number[i]]) total += map[number[i]];
//     }
//     return total;
// }


// function createLinkedList(head) {
//     const nodes = [];
//     let curr = head;
//     while (curr) {
//         nodes.push(curr);
//         curr = curr.next;
//         nodes[nodes.length - 1].next = null;
//     };

//     for (let i = 0; i < nodes.length; ++i) {
//         if ((i + 1) % 2 === 0 && nodes[i]) {
//             nodes.push(nodes[i]);
//             nodes[i] = null;
//         }
//     }
//     nodes.push(null);
//     curr = head;
//     for (let j = 2; j < nodes.length; ++ j) {
//         if (nodes[j]) {
//             curr.next = nodes[j];
//             curr = curr.next;
//         }
//     }
//     return head;
// }
// function createLinkedList(head) {
//     const dummyHead = new SinglyLinkedListNode();
//     let newCurr = dummyHead;

//     while (head) {
//         let oldPrev = null;
//         let oldCurr = head;
//         head = head.next;

//         while (oldCurr) {
//             if (oldPrev) oldPrev.next = oldCurr.next;
//             newCurr.next = oldCurr;
//             newCurr = newCurr.next;
//             oldPrev = oldCurr.next;
//             oldCurr = oldPrev?.next;
//         }
//     }
//     return dummyHead.next;
// }


// function weightCapacity(weights, maxCapacity) {
//     const sums = new Set([0]);

//     for (let w of weights) {
//         const tempSums = new Set();

//         for (let sum of sums) {
//             if (w + sum === maxCapacity) return maxCapacity;
//             if (w + sum < maxCapacity) tempSums.add(w + sum);
//         }

//         for (let item of tempSums) sums.add(item);

//     }

//     let heaviest = 0;

//     for (let sum of sums) heaviest = Math.max(heaviest, sum);

//     return heaviest;
// }
// function weightCapacity(weights, maxCapacity) {
//     weights.sort((a, b) => a - b);
//     const memo = {};
//     return helper(0, 0);

//     function helper(prevW, i) {
//         if (i >= weights.length) return prevW;
//         let key = `${prevW}-${i}`;
//         if (key in memo) return memo[key];
//         let currW = weights[i];
//         if (prevW + currW > maxCapacity) return prevW;
//         let op1 = helper(prevW + currW, i + 1);
//         let op2 = helper(prevW, i + 1);
//         memo[key] = Math.max(op1, op2);
//         return memo[key];
//     }
// }


// function maximumProfit(price) {
//     let lastDay = price[price.length - 1];
//     let profit = 0;
//     for (let i = price.length - 2; i >= 0; --i) {
//         if (price[i] < lastDay) profit += (lastDay - price[i]);
//         else lastDay = price[i];
//     }
//     return profit;
// }
// function maximumProfit(price) {
//     let max = price[price.length - 1];
//     let profit = 0;
//     for (let i = price.length - 2; i >= 0; --i) {
//         if (max >= price[i]) {
//             profit += max - price[i];
//         } else {
//             max = price[i];
//         }
//     }
//     return profit;
// }

// function strokesRequired(picture) {
//     for (let str of picture) str = str.split('');
//     const set = new Set();

//     function traverse(coords) {
//         const stack = [coords];
//         let target = picture[coords[0]][coords[1]];
//         while (stack.length) {
//             let [x, y] = stack.pop();
//             set.add(x + '-' + y);
//             if (x > 0 && picture[x - 1][y] === target && !set.has((x - 1) + '-' + y)) {
//                 stack.push([x - 1, y]);
//             }
//             if (x < picture.length - 1 && picture[x + 1][y] === target && !set.has((x + 1) + '-' + y)) {
//                 stack.push([x + 1, y]);
//             }
//             if (y > 0 && picture[x][y - 1] === target && !set.has(x + '-' + (y - 1))) {
//                 stack.push([x, y - 1]);
//             }
//             if (y < picture[x].length - 1 && picture[x][y + 1] === target && !set.has(x + '-' + (y + 1))) {
//                 stack.push([x , y + 1]);
//             }
//         }
//         return;
//     }

//     let counts = 0;
//     for (let i = 0; i < picture.length; ++i) {
//         for (let j = 0; j < picture[i].length; ++j) {
//             if (!set.has(i + '-' + j)) {
//                 ++counts;
//                 traverse([i, j]);
//             }
//         }
//     }
//     return counts;
// }
// function strokesRequired(picture) {
//     for (let str of picture) str = str.split('');
//     let visited = new Set();
//     let strokes = 0;
//     for (let x = 0; x < picture.length; ++x) {
//         for (let y = 0; y < picture[x].length; ++y) {
//             let target = picture[x][y];
//             dfsFill(picture, x, y, visited, target);
//             ++strokes;
//         }
//     }
//     function dfsFill(matrix, r, c, visited, color) {
//         if (r < 0 || c < 0 || r > matrix.length - 1 || c > matrix[r].length - 1 || color !== matrix[x][y]) return;
//         set.add(x + '-' + y);
//         if (!set.has((r - 1) + '-' + c)) {
//             dfsFill(matrix, r-1, c, visited, color);
//         }
//         if (!visited.has((r + 1) + '-' + c)) {
//             dfsFill(matrix, r+1, c, visited, color);
//         }
//         if (!visited.has(r + '-' + (c - 1))) {
//             dfsFill(matrix, r, c-1, visited, color);
//         }
//         if (!visited.has(r + '-' + (c + 1))) {
//             dfsFill(matrix, r, c+1, visited, color);
//         }
//         return;
//     }
//     return strokes;
// }

// function minMoves(n, startRow, startCol, endRow, endCol, steps=0, memo={}) {
//     if (startCol > n || startRow > n || startCol < 0 || startRow < 0 || memo[startRow + '' + startCol]) return Infinity;
//     if (startCol === endCol && startRow === endRow) return steps;
//     memo[startRow + '' + startCol] = true;
//     console.log(memo)
//     steps += 1;
//     let upL2 = minMoves(n, startRow - 2, startCol - 1, endRow, endCol, steps, memo);
//     let upL1 = minMoves(n, startRow - 1, startCol - 2, endRow, endCol, steps, memo);
//     let upR2 = minMoves(n, startRow - 2, startCol + 1, endRow, endCol, steps, memo);
//     let upR1 = minMoves(n, startRow - 1, startCol + 2, endRow, endCol, steps, memo);
//     let downL2 = minMoves(n, startRow + 2, startCol - 1, endRow, endCol, steps, memo);
//     let downL1 = minMoves(n, startRow + 1, startCol - 2, endRow, endCol, steps, memo);
//     let downR2 = minMoves(n, startRow + 2, startCol + 1, endRow, endCol, steps, memo);
//     let downR1 = minMoves(n, startRow + 1, startCol + 2, endRow, endCol, steps, memo);
//     return Math.min(upL1, upL2, upR1, upR2, downL1, downL2, downR1, downR2);
// }
// function minMoves(n, startRow, startCol, endRow, endCol) {
//     const q = [[coords]];
//     const paths = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
//     const visited = new Set();
//     let steps = 0;
//     visited.add(startRow + '-' + startCol);
//     while(q.length) {
//         for (let i = 0; i < q.length; ++i) {
//             let pos = q.shift();
//             for (let path of paths) {
//                 let newRow = path[0] + pos[0];
//                 let newCol = path[1] + pos[1];
//                 if (!visited.has(newRow + '-' + newCol) && newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
//                     if (newRow === endRow && newCol === endCol) return count + 1;
//                     q.push([newRow, newCol]);
//                     visited.add(newRow + '-' + newCol);
//                 }
//             }
//         }
//         ++count;
//     }
//     return -1;
// }


// function countPairs(numbers, k) {
//     const nums = new Set(numbers);
//     let pairs = 0;
//     const map = {};
//     for (let num of nums) {
//         map[num+k] = true;
//     }
//     for (let num of nums) {
//         if (map[num]) ++pairs;
//     }
//     return pairs;
// }


function playlist(songs) {
    const map = {};
    let pairs = 0;
    for (let song of songs) {
        let diff = Math.abs(60 - (song % 60));
        if (map[diff]) pairs += map[diff];
        song = song > 60 ? song % 60 : song;
        console.log(song)
        map[song] = map[song] ? map[song] + 1 : 1;
    }
    return pairs;
}
console.log(playlist([900, 800, 700]))
