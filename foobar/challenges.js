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
// function countPairs(numbers, k) {
//     const nums = new Set(numbers);
//     let pairs = 0;
//     for (let num of nums) {
//         if (nums.has(num+k)) ++pairs;
//     }
//     return pairs;
// }


// function playlist(songs) {
//     const map = {};
//     let pairs = 0;
//     for (let song of songs) {
//         let mod = song % 60;
//         let diff = Math.abs(60 - mod) % 60;
//         if (map[diff]) pairs += map[diff];
//         map[mod] = map[mod] ? map[mod] + 1 : 1;
//     }
//     return pairs;
// }


// function reachTheEnd(grid, maxTime) {
//     const stack = [[0, 0, 0]];
//     const coords = new Set();
//     let end = 'No';
//     while (stack.length) {
//         let [x, y, secs] = stack.pop();
//         coords.add(x + '-' + y);
//         if (x === grid.length - 1 && y === grid[x].length -1) {
//             end = 'Yes';
//             break;
//         }
//         if (secs < maxTime) {
//             ++secs;
//             if (x > 0 && grid[x-1][y] === '.' && !coords.has((x-1) + '-' + y)) stack.push([x-1, y, secs]);
//             if (y > 0 && grid[x][y-1] === '.' && !coords.has(x + '-' + (y-1))) stack.push([x, y-1, secs]);
//             if (x < grid.length - 1 && grid[x+1][y] === '.' && !coords.has((x+1) + '-' + y)) stack.push([x+1, y, secs]);
//             if (y < grid[x].length - 1 && grid[x][y+1] === '.' && !coords.has(x + '-' + (y+1))) stack.push([x, y+1, secs]);
//         }
//     }
//     return end;
// }


// function minNum(samDaily, kellyDaily, difference) {
//     if (samDaily > kellyDaily) return -1;
//     let sam = difference;
//     let kelly = 0;
//     let days = 0;
//     while (kelly <= sam) {
//         ++days;
//         sam += samDaily;
//         kelly += kellyDaily;
//     }
//     return days;
// }


// function htmlElements(s) {
//     let elements = [];
//     let beg = 0;
//     for (let end = 0; end < s.length; ++end) {
//         if (s[end] === '<' && (s[end+1] !== '<' && s[end-1] !== '<')) beg = end;
//         if (s[end] === '>' && (s[end+1] !== '>' && s[end-1] !== '>')) {
//             if (s[beg+1] === '\\') {
//                 elements.push('/' + s.slice(beg+2, end));
//             } else elements.push(s.slice(beg+1, end));
//         }
//     }
//     const tags = [];
//     for (let el of elements) {
//         if (el[0] === '/') {
//             if ('/' + tags[tags.length -1] === el) tags.pop();
//         } else {
//             if (el !== '') tags.push(el);
//         }
//     }
//     return tags.length ? tags[tags.length - 1] : true;
// }



// function romanValue(str) {
//     const numerals = {
//         'L': 50,
//         'X': 10,
//         'V': 5,
//         'I': 1
//     };
//     let value = 0;
//     for (let i = 0; i < str.length; ++i) {
//         if (i < str.length - 2 && numerals[str[i+1]] > numerals[str[i]]) {
//             value += numerals[str[i+1]] - numerals[str[i]];
//         } else value += numerals[str[i]];
//     }
//     return value;
// }
// function sortRoman(names) {
//     const diffNames = {};
//     /* diffName = {
//         'name': [[name, numeral], [name, numeral]]
//     }
//     */
//     for (let name of names) {
//         name = name.split(' ');
//         if (diffNames[name[0]]) diffNames[name[0]].push(name);
//         else diffNames[name[0]] = [name];
//     }
//     const entries = Object.entries(diffNames);
//     entries.sort();
//     const result = [];
//     for (let [key, value] of entries) {
//         value.sort((a, b) => romanValue(a[1]) < romanValue(b[1]));
//         value.forEach(el => result.push(el.join(' ')));
//     }
//     return result;
// }


// function isPalindrome(arr) {
//     let l = 0;
//     let r = arr.length - 1;
//     while (l < r) {
//         if (arr[l] !== arr[r]) return false;
//         ++l;
//         --r;
//     }
//     return true;
// }
// function lowestASCII(code) {
//     for (let i = 97; i <= 122; ++i) {
//         if (i < code) return i;
//         if (i >= code) break;
//     }
//     return code;
// }
// function breakPalindrome(palindromeStr) {
//     let currStr = palindromeStr.split('');
//     for (let i = 0; i < currStr.length; ++i) {
//         const currCode = currStr[i].charCodeAt();
//         const lowerCode = lowestASCII(currCode);
//         if (lowerCode < currCode) {
//             let temp = currStr[i];
//             currStr[i] = String.fromCharCode(lowerCode);
//             if (!isPalindrome(currStr)) {
//                 return currStr.join('');
//             } else currStr[i] = temp;
//         }
//     }
//     return 'IMPOSSIBLE';
// }


// function isAnagram(s1, s2) {
//     const s1Map = {};
//     const s2Map = {};
//     for (let i = 0; i < s1.length; ++i) {
//         s1Map[s1[i]] = s1Map[s1[i]] + 1 || 1;
//         s2Map[s2[i]] = s2Map[s2[i]] + 1 || 1;
//     }
//     for (let key of Object.keys(s1Map)) {
//         if (!s2Map[key] || s1Map[key] !== s2Map[key]) return false;
//     }
//     return true;
// }
// function getSearchResults(words, queries) {
//     const results = [];
//     for (let str of queries) {
//         let matches = [];
//         for (let word of words) {
//             if (str.length === word.length && isAnagram(str, word)) matches.push(word);
//         }
//         matches.sort();
//         results.push(matches);
//     }
//     return results;
// }


// function findMinimumPrice(price, m) {
//     price.sort((a, b) => a - b);
//     while (m > 0) {
//         for (let i = price.length - 1; i >= 0; --i){
//             price[i] = Math.floor(price[i] / 2);
//             --m;
//             if (m < 1) break;
//         }
//     }
//     return price.reduce((accum, el) => {return accum + el}, 0);
// }


// function findLongestSingleSlot(leaveTimes) {
//     const ids = (() => {
//         const map = {};
//         let char = 97;
//         for (let i = 0; i < 26; ++i) {
//             map[i] = String.fromCharCode(char);
//             ++char;
//         }
//         return map;
//     })()
//     let id;
//     let beg = 0;
//     let max = 0;
//     for (let [num, end] of leaveTimes) {
//         if (end - beg > max) {
//             max = end - beg;
//             id = num;
//         }
//         beg = end;
//     }
//     return ids[id];
// }


// function twin_sum(head) {
//     const nodes = ((node) => {
//         const results = [];
//         while (node) {
//             results.push(node);
//             node = node.next;
//         }
//         return results;
//     })(head);
//     let max = -Infinity;
//     let l = 0;
//     let r = nodes.length - 1;
//     while (r > l) {
//         let total = nodes[l].data + nodes[r].data;
//         if (total > max) max = total;
//         ++l;
//         --r;
//     }
//     return max;
// }


// function minFuel(x, y) {
//     let min = Infinity;
//     for (let i = 0; i < x.length; ++i) {
//         let total = 0;
//         let [min_x, max_x] = [x[i]-1, x[i]+1];
//         for (let j = 0; j < x.length; ++j) {
//             let curr_total = 0;
//             if (j !== i) {
//                 if (x[j] <= min_x) {
//                     curr_total += Math.abs(min_x - x[j]);
//                     --min_x;
//                 } else {
//                     curr_total += Math.abs(max_x - x[j]);
//                     ++max_x;
//                 }
//                 curr_total += Math.abs(y[i] - y[j]);
//             }
//             total += curr_total;
//         }
//         min = Math.min(min, total);
//     }
//     return min;
// }


/*
    SELECT department.dept_id, COUNT(employee.emp_id), SUM(employee.salary) FROM department
    LEFT JOIN employee
    ON department.dept_id = employee.dept_id
    WHERE employee.salary IS NOT NULL
    GROUP BY department.dept_id
    HAVING COUNT(employee.emp_id) > 0
    ORDER BY 1;

 */


// function solution(A, K) {
//     var n = A.length;
//     if (n < K) return false;
//     for (var i = 0; i < n - 1; i++) {
//         if (A[i] + 1 < A[i + 1])
//             return false;
//     }
//     if (A[0] != 1 || A[n - 1] != K)
//         return false;
//     else
//         return true;
// }


// function mostBalancedPartition(parent, files_size) {
//     const subs = [];
//     for (let h = 0; h < parent.length; ++h) subs.push([]);
//     for (let i = 1; i < parent.length; ++i) {
//         subs[parent[i]].push(i);
//     }
//     const sums = Array(parent.length);
//     function getSums(arr, i=0) {
//         arr[i] = files_size[i];
//         let sum = 0;
//         for (let s of subs[i]) {
//             sum += getSums(arr, s);
//         }
//         arr[i] += sum;
//         return arr[i];
//     }
//     getSums(sums, 0)
//     let min = Infinity;
//     for (let k = 1; k < sums.length; ++k) {
//         let curr = Math.abs(sums[0] - (sums[k] * 2));
//         if (curr < min) min = curr;
//     }
//     return min;
// }


// function minStart(arr) {
//     let res = 0;
//     let total = 0;
//     for (let n of arr) {
//         total += n;
//         if (total < 1) {
//             res += Math.abs(total)+1;
//             total = 1;
//         }
//     }
//     return res;
// }


// function getTotalExecutionTime(n, logs) {
//     let funcs = [];
//     for (let i = 0; i < n; ++i) funcs.push([0,0,0,0]);
//     for (let log of logs) {
//         let [id_str, s_or_e, time_str] = log.split(':');
//         const id = Number(id_str);
//         const time = Number(time_str);
//         if (s_or_e === 'start') {
//             funcs[id][0] = time;
//         } else {
//             funcs[id][1] = time;
//             funcs[id][2] = funcs[id][1] - funcs[id][0] + 1;
//         }
//     }
//     for (let i = 0; i < funcs.length; ++i) {
//         for (let j = i+1; j < funcs.length; ++j) {
//             if (funcs[j][0] > funcs[i][0] && funcs[j][1] < funcs[i][1]) {
//                 funcs[i][2] -= funcs[j][2];
//             }
//         }
//     }
//     return funcs.map((el, i) => el[2]);
// }


// function right_side_view(root) {
//     if (!root) return root;
//     let vals = [root.val];
//     root = root.right;
//     let q = [];
//     if (root) q.push(root);
//     while (q.length) {
//         let curr = q.shift();
//         vals.push(curr.val);
//         if (curr.left) q.push(curr.left);
//         if (curr.right) q.push(curr.right);
//     }
//     return vals;
// }


// function commonSubstring(a, b) {
//     for (let index in a) {
//         let chars = new Set();
//         for (let i in a[index]) {
//             chars.add(a[index][i]);
//         }
//         a[index] = chars;
//     }
//     for (let index in b) {
//         let hasCom = false;
//         for (let char of b[index]) {
//             if (a[index].has(char)) {
//                 hasCom = true;
//                 break;
//             }
//         }
//         console.log(hasCom ? 'YES' : 'NO');
//     }
// }


// function isWeak(str, strs) {
//     if (str.length < 6) return true;
//     if (str === str.toLowerCase()) return true;
//     if (str === str.toUpperCase()) return true;
//     // if ((new RegExp('^[^a-z]*$')).test(str)) return true;
//     // if ((new RegExp('^[^A-Z]*$')).test(str)) return true;
//     if ((new RegExp('^\d+$')).test(str)) return true;
//     for (let s of strs) {
//         if (s === str) return true;
//         if ((new RegExp(`${s}+`)).test(str)) return true;
//     }
//     return false;
// }
// function getPasswordStrength(passwords, common_words) {
//     const res = [];
//     for (let pass of passwords) {
//         if (isWeak(pass, common_words)) res.push('weak');
//         else res.push('strong');
//     }
//     return res;
// }


// class OrderedStream {
//     constructor(n) {
//         this.stream = new Array(n).fill(null);
//         this.beg = 0;
//     }

//     insert(idKey, value) {
//         this.stream[idKey-1] = value;
//         const res = [];
//         while (this.beg < this.stream.length) {
//             if (this.stream[this.beg] === null) break;
//             res.push(this.stream[this.beg]);
//             ++this.beg;
//         }
//         return res;
//     }
// }


// function ArrayChallenge(strArr) {
//     function getMin(curr, val) {
//         return Math.min(curr, val);
//     }
//     function getMax(curr, val) {
//         return Math.max(curr, val);
//     }
//     let min_x = Infinity;
//     let max_x = -Infinity;
//     let min_y = Infinity;
//     let max_y = -Infinity;
//     for (let str of strArr) {
//         let x = Number(str[1]);
//         let y = Number(str[3]);
//         min_x = getMin(min_x, x);
//         max_x = getMax(max_x, x);
//         min_y = getMin(min_y, y);
//         max_y = getMax(max_y, y);
//     }
//     return (max_x - min_x) * (max_y - min_y);
//   }


// function maxDifference(px) {
//     let diff = -1;
//     let min = px[0];
//     for (let i = 1; i < px.length; ++i) {
//         let num = px[i];
//         if (num > min) {
//             diff = Math.max(diff, num - min);
//         }
//         if (num < min) {
//             min = num;
//         }
//     }
//     return diff;
// }


// function plus_one(digits) {
//     let i = digits.length - 1;
//     digits[i] += 1;
//     while (i >= 0 && digits[i] > 9) {
//         digits[i] = 0;
//         if (i > 0) {
//             digits[i-1] += 1;
//         } else {
//             digits.unshift(1);
//         }
//         i -= 1;
//     }
//     return digits;
// }


// function reverse_parentheses(s) {
//     const stack = [];
//     for (let char in s) {
//         if (char === ')') {
//             let temp = '';
//             while (stack[stack.length-1] !=='(') {
//                 temp = temp + stack.pop();
//             }
//             stack.pop();
//             for (let charac in temp) {
//                 stack.push(charac);
//             }
//         } else stack.push(char);
//     }
//     return stack.join('');
// }

// function itAndAdd(o1, o2, res) {
//     for (let key in o1) {
//         if (o2[key] && o1[key] !== o2[key]) res.add(key);
//     }
//     return;
// }
// function getJSONDiff(json1, json2) {
//     json1 = JSON.parse(json1);
//     json2 = JSON.parse(json2);
//     let res = new Set();
//     itAndAdd(json1, json2, res);
//     itAndAdd(json2, json1, res);
//     res = [...res];
//     return res.sort();
// }


// function longest_common_prefix(strs) {
//     let common = strs[0];
//     for (let str of strs) {
//         if (common === '') return common;
//         let temp = '';
//         for (let i in str) {
//             if (i < common.length && str[i] === common[i]) {
//                 temp += str[i];
//             }
//         }
//         common = temp;
//     }
//     return common;
// }


// function malarkey_sort(arr) {
//     arr.sort();
//     const res = [];
//     let l = 0;
//     let r = arr.length - 1;
//     while (l < r) {
//         res.push(arr[r]);
//         res.push(arr[l]);
//         --r;
//         ++l;
//     }
//     if (res.length < arr.length) res.push(arr[l]);
//     return res;
// }


// function arrToObj(arr) {
//     const obj = {};
//     for (let word of arr) obj[word.toLowerCase()] = true;
//     return obj;
// }
// function getSpamEmails(subjects, spam_words) {
//     for (let i = 0; i < subjects.length; ++i) subjects[i] = subjects[i].split(' ');

//     spam_words = arrToObj(spam_words);

//     const res = [];
//     for (let subject of subjects) {
//         let count = 0;
//         for (let sub of subject) {
//             if (spam_words[sub.toLowerCase()]) ++count;
//             if (count === 2) break;
//         }
//         if (count === 2) res.push('spam');
//         else res.push('not_spam');
//     }
//     return res;
// }


// function lengthOfLongestSubstring(s) {
//     const chars = {};
//     let l = 0;
//     let r = 0;
//     let max = 0;
//     while (r < s.length) {
//         const char = s[r];
//         chars[char] = chars[char] ? chars[char] + 1 : 1;
//         while (chars[char] > 1) {
//             --chars[s[l]];
//             ++l;
//         }
//         max = Math.max(r - l + 1, max);
//         ++r;
//     }
//     return max;
// }


// function convert(s, numRows) {
//     const l = s.length;
//     const lets = [];
//     for (let i = 0; i < numRows; ++i) lets.push([]);
//     let i = 0;
//     while (i < l) {
//         for (let j = 0; j < lets.length && i < l; ++j) {
//             lets[j].push(s[i]);
//             ++i;
//         }
//         for (let k = lets.length - 2; k > 0 && i < l; --k) {
//             lets[k].push(s[i]);
//             ++i;
//         }
//     }
//     let res = '';
//     for (let arr of lets) {
//         for (let char of arr) res += char;
//     }
//     return res;
// }


function closedPaths(number) {
    const paths = {
        '0': 1,
        '4': 1,
        '6': 1,
        '8': 2,
        '9': 1
    };
    number = number + '';
    let count = 0;
    for (let i = 0; i < number.length; ++i) {
        const num = number[i];
        count += paths[num] || 0;
    }
    return count;
}
