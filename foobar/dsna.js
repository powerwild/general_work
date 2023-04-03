// var runningSum = function(nums) {
//     const results = [nums[0]];
//     for (let i = 1; i < nums.length; ++i) {
//         results.push(nums[i] + results[i-1])
//     }
//     return results;
// };


// var pivotIndex = function(nums) {
//     let total = 0;
//     for (let i = 0; i < nums.length; ++i) total += nums[i];
//     let lSum = 0;
//     for (let j = 0; j < nums.length; ++j) {
//         total -= nums[j];
//         if (lSum === total) return j;
//         lSum += nums[j];
//     }
//     return -1;
// };


// var isIsomorphic = function(s, t) {
//     if (s.length !== t.length) return false;
//     const sArr = s.split('');
//     const tArr = t.split('');
//     const sMap = {};
//     const tMap = {};
//     for (let i = 0; i < sArr.length; ++i) {
//         if (!sMap[sArr[i]]) sMap[sArr[i]] = '' + i;
//         else sMap[sArr[i]] += i;

//         if (!tMap[tArr[i]]) tMap[tArr[i]] = '' + i;
//         else tMap[tArr[i]] += i;
//     }
//     for (let j = 0; j < sArr.length; ++j) {
//         if (sMap[sArr[j]] !== tMap[tArr[j]]) return false;
//     }
//     return true;
// };


// var isSubsequence = function(s, t) {
//     if (!s.length) return true;
//     if (s.length && !t.length || s.length > t.length) return false;
//     const sArr = s.split('');
//     const tArr = t.split('');
//     let found = false;
//     let i = 0;
//     for (let j = 0; j < tArr.length; ++j) {
//         const char = sArr[i];
//         if (tArr[j] === char) {
//             ++i;
//             if (i === sArr.length) found = true;
//         }
//     }
//     return found;
// };


// var mergeTwoLists = function(list1, list2) {
//     if (!list1) return list2;
//     if (!list2) return list1;
//     let curr1 = list1;
//     let curr2 = list2;
//     let prev;
//     const newHead = curr1.val <= curr2.val ? curr1 : curr2;
//     while (curr1 && curr2) {
//         if (curr2 && curr1.val <= curr2.val) {
//             while (curr1.next && curr1.next.val <= curr2.val) curr1 = curr1.next;
//             prev = curr1;
//             curr1 = curr1.next;
//             prev.next = curr2;
//         } else if (!curr2) break;
//         if (curr1 && curr2.val <= curr1.val) {
//             while (curr2.next && curr2.next.val <= curr1.val) curr2 = curr2.next;
//             prev = curr2;
//             curr2 = curr2.next;
//             prev.next = curr1;
//         } else if (!curr1) break;
//     }
//     return newHead;
// };


// var reverseList = function(head) {
//     if (!head) return head;
//     const arr = [];
//     let curr = head;
//     while (curr) {
//         arr.push(curr);
//         curr = curr.next;
//     }
//     for (let i = arr.length - 1; i >= 0; --i) {
//         if (i === 0) {
//             arr[i].next = null;
//         } else arr[i].next = arr[i-1];
//     }
//     return arr[arr.length - 1];
// };


// var middleNode = function(head) {
//     if (!head) return head;
//     const arr = [];
//     let curr = head;
//     while (curr) {
//         arr.push(curr);
//         curr = curr.next;
//     }
//     return arr[Math.floor(arr.length / 2)];
// };


// var detectCycle = function(head) {
//     if (!head || !head.next) return null;
//     const map = new Set();
//     let curr = head;
//     while (curr) {
//         if (map.has(curr)) return curr;
//         map.add(curr);
//         curr = curr.next;
//     }
//     return null;
// };


// var maxProfit = function(prices) {
//     let profit = 0;
//     let i = 0;
//     let j = 1;
//     while (j < prices.length) {
//         let currProf = prices[j] - prices[i];
//         if (currProf > profit) profit = currProf;
//         if (prices[j] < prices[i]) i = j;
//         ++j;
//     }
//     return profit;
// };


// var longestPalindrome = function(s) {
//     const map = {};
//     for (let i = 0; i < s.length; ++i) {
//         const char = s[i];
//         if (!map[char]) map[char] = 1;
//         else map[char] += 1;
//     }
//     let oddNumLets = false;
//     let maxLength = 0;
//     const vals = Object.values(map);
//     for (let j = 0; j < vals.length; ++j) {
//         const leftover = vals[j] % 2;
//         if (leftover > 0) {
//             oddNumLets = true;
//             maxLength += vals[j] - leftover;
//         } else maxLength += vals[j];
//     }
//     return maxLength + (oddNumLets ? 1 : 0);
// };


// var preorder = function(root) {
//     if (!root) return [];
//     const vals = [];
//     const stack = [root];
//     let curr;
//     while (stack.length) {
//         curr = stack.pop();
//         vals.push(curr.val);
//         if (curr.children) {
//             for (let i = curr.children.length - 1; i >= 0; --i) stack.push(curr.children[i]);
//         }
//     }
//     return vals;
// };


// var levelOrder = function(root) {
//     if (!root) return [];
//     const vals = [[root.val]];
//     const q = [root];
//     while (q.length) {
//         let currs = [...q];
//         q.length = 0;
//         let levelArr = [];
//         for (let i = 0; i < currs.length; ++ i) {
//             let curr = currs[i];
//             if (curr.left) {
//                 q.push(curr.left);
//                 levelArr.push(curr.left.val);
//             }
//             if (curr.right) {
//                 q.push(curr.right);
//                 levelArr.push(curr.right.val);
//             }
//         }
//         if (levelArr.length) vals.push(levelArr);
//     }
//     return vals;
// };


// var search = function(nums, target) {
//     if (nums.length === 1) {
//         return nums[0] === target ? 0 : -1;
//     }
//     let i = 0;
//     let j = nums.length - 1;
//     while (i <= j) {
//         if(nums[i] === target) return i;
//         if (i !== j && nums[j] === target) return j;
//         ++i;
//         --j;
//     }
//     return -1;
// };


// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         if (n === 1) return 1;
//         let s = 1;
//         while (s < n) {
//             let m = Math.floor((n + s) / 2);
//             if (isBadVersion(m)) n = m;
//             else s = m + 1;
//         }
//         return s;
//     };
// };


// var findMedianSortedArrays = function(nums1, nums2) {
//     nums1.push(...nums2);
//     nums1.sort((a, b) => a - b);
//     let mid = Math.floor(nums1.length / 2);
//     if (nums1.length % 2 === 0) return (nums1[mid] + nums1[mid - 1]) / 2;
//     else return nums1[mid];
// };


// var isValidBST = function(root, min=-Infinity, max=Infinity) {
//     if (!root) return true;
//     if (root.val <= min || root.val >= max) return false;
//     return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
// };

// var traverse = function(n, min, max) {
//     if (n.val >= min.val && n.val <= max.val) return n;
//     if (n.val < min.val) return traverse(n.right, min, max);
//     if (n.val > max.val) return traverse(n.left, min, max);
// }
// var lowestCommonAncestor = function(root, p, q) {
//     const [min, max] = p.val < q.val ? [p, q] : [q, p];
//     return traverse(root, min, max);
// };
// var lowestCommonAncestor = function(root, p, q) {
//     const [min, max] = p.val < q.val ? [p, q] : [q, p];
//     let curr = root;
//     while (curr.val < min.val || curr.val > max.val) {
//         if (curr.val < min.val) curr = curr.right;
//         else if (curr.val > max.val) curr = curr.left;
//     }
//     return curr;
// }


// var reverse = function(x) {
//     let negOffset = x < 0 ? -1 : 1;
//     x *= negOffset;
//     x = String(x).split('');
//     x.reverse();
//     x = Number(x.join(''));
//     x *= negOffset;
//     return x < 2147483647 && x > -2147483647 ? x : 0;
// };


// var floodFill = function(image, sr, sc, color) {
//     const q = [[sr, sc]];
//     let target = image[sr][sc];
//     while (q.length) {
//         let [r, c] = q.pop();
//         if (r < image.length - 1 && image[r+1][c] === target && image[r+1][c] !== color) q.push([r+1, c]);
//         if (r > 0 && image[r-1][c] === target && image[r-1][c] !== color) q.push([r-1, c]);
//         if (c < image[0].length - 1 && image[r][c+1] === target && image[r][c+1] !== color) q.push([r, c+1]);
//         if (c > 0 && image[r][c-1] === target && image[r][c-1] !== color) q.push([r, c-1]);
//         image[r][c] = color;
//     }
//     return image;
// };


// var addIslands = function(grid, xy, memo) {
//     const q = [xy];
//     while (q.length) {
//         let [x, y] = q.pop();
//         if (x > 0) if (grid[x - 1][y] === '1' && !memo.has(String([x-1, y]))) {
//             memo.add(String([x-1, y]));
//             q.push([x-1, y]);
//         }
//         if (x < grid.length - 1) if (grid[x + 1][y] === '1' && !memo.has(String([x+1, y]))) {
//             memo.add(String([x+1, y]));
//             q.push([x+1, y]);
//         }
//         if (y > 0) if (grid[x][y - 1] === '1' && !memo.has(String([x, y-1]))) {
//             memo.add(String([x, y-1]));
//             q.push([x, y-1]);
//         }
//         if (y < grid[0].length - 1) if (grid[x][y + 1] === '1' && !memo.has(String([x, y+1]))) {
//             memo.add(String([x, y+1]));
//             q.push([x, y+1]);
//         }
//     }
//     return memo;
// }
// var numIslands = function(grid) {
//     if (grid[0].length === 0) return 0;
//     const coords = new Set();
//     let x = 0;
//     let y = 0;
//     let islands = 0;
//     while (x < grid.length && y < grid[0].length) {
//         if (grid[x][y] === '1' && !coords.has(String([x, y]))) {
//             addIslands(grid, [x, y], coords);
//             islands += 1;
//         }
//         if (y === grid[0].length - 1 && x < grid.length - 1) {
//             y = -1;
//             x += 1;
//         }
//         y += 1;
//     }
//     return islands;
// };


// var fib = function(n) {
//     if (n === 0) return 0;
//     const fibs = [1, 1];
//     while (fibs.length < n) {
//         let l = fibs.length - 1;
//         fibs.push(fibs[l] + fibs[l-1]);
//     }
//     return fibs[n-1];
// };


// var climbStairs = function(n) {
//     let total = 1;
//     let inc = 1;
//     for (let i = 1; i < n; ++i) {
//         let prev = total;
//         total += inc;
//         inc = prev;
//     }
//     return total;
// };


// var minCostClimbingStairs = function(cost) {
//     let last = cost[cost.length-1];
//     let prev = cost[cost.length-2];
//     for (let i = cost.length - 3; i >= 0; --i) {
//         let old = prev;
//         prev = Math.min(prev, last) + cost[i];
//         last = old;
//     }
//     return Math.min(last, prev);
// };


// var uniquePaths = function(m, n, memo={}) {
//     const key = m + ',' + n;
//     if (memo[key]) return memo[key];
//     if (m === 1 || n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//     memo[key] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo);
//     return memo[key];
// };


// var findAnagrams = function(s, p) {
//     const needLets = {};

//     for (let i = 0; i < p.length; ++i) {
//         if (p[i] in needLets) ++needLets[p[i]];
//         else needLets[p[i]] = 1;
//     };

//     const results = [];
//     let left = 0;
//     let right = 0;
//     let numOfLets = p.length;

//     while (right < s.length) {
//         if (needLets[s[right]] > 0) {
//             --numOfLets;
//         }
//         --needLets[s[right]];
//         ++right;
//        if (numOfLets === 0) results.push(left);
//        if (right - left === p.length) {
//             if (needLets[s[left]] >= 0) {
//                 ++numOfLets;
//             }
//             ++needLets[s[left]];
//             ++left;
//        }
//     }
//     return results;
// };
// console.log(findAnagrams('cbaebabacd', 'abc'))


// var characterReplacement = function(s, k) {
//     let l = 0;
//     let r = 0;
//     let max = 0;
//     let hash = {};
//     while (r < s.length) {
//         if (hash[ s[r] ]) hash[ s[r] ]++;
//         else hash[ s[r] ] = 1;
//         if (hash[ s[r] ] > max) max = hash[ s[r] ];
//         if ( ((r - l) + 1) - max > k ) {
//             hash[ s[l] ]--;
//             l++;
//         }
//         r++;
//     }
//     return r - l;
// };


// var twoSum = function(nums, target) {
//     if (nums.length === 2) return [0, 1];
//     const hash = {};
//     for (let i = 0; i < nums.length; ++i) {
//         if ((target - nums[i]) in hash) return [hash[target - nums[i]], i];
//         hash[nums[i]] = i;
//     }
// };


// var candyCrush = function(board) {
//     let rows = board.length;
//     let cols = board[0].length;
//     let needCrush = false;

//     for (let r = 0; r < rows; ++i) {
//         for (let c = 0; c < cols - 2; ++c) {
//             let val = Math.abs(board[r][c]);
//             if (val !== 0 && val === Math.abs(board[r][c+1]) && val === Math.abs(board[r][c+2])) {
//                 board[r][c] = val * -1;
//                 board[r][c+1] = val * -1;
//                 board[r][c+2] = val * -1;
//                 needCrush = true;
//             }
//         }
//     }

//     for (let r = 0; r < rows - 2; ++r) {
//         for (let c = 0; c < cols; ++c) {
//             let val = Math.abs(board[r][c]);
//             if (val !== 0 && val === Math.abs(board[r+1][c]) && val === Math.abs(board[r+2][c])) {
//                 board[r][c] = val * -1;
//                 board[r+1][c] = val * -1;
//                 board[r+2][c] = val * -1;
//                 needCrush = true;
//             }
//         }
//     }

//     for (let c = 0; c < cols; ++c) {
//         let anchor = rows - 1;
//         for (let r = anchor; r >= 0; --r) {
//             if (board[r][c] > 0) {
//                 board[anchor][c] = board[r][c];
//                 anchor -= 1;
//             }
//         }
//         for (let r = 0; r < anchor + 1; ++r) {
//             board[r][c] = 0;
//         }
//     }

//     return needCrush ? candyCrush(board) : board;
// }


// function minStart(arr) {
//     let start = 1;
//     let sum = start;
//     for (let i = 0; i < arr.length; ++i) {
//         sum += arr[i];
//         if (sum === 0) {
//             ++start;
//             ++sum;
//         }
//         if (sum < 0) {
//             start += Math.abs(sum) + 1;
//             sum += Math.abs(sum) + 1;
//         }
//     }
//     // let fullLoop = false;
//     // while (!fullLoop) {
//     //     for (let i = 0; i < arr.length; ++i) {
//     //         sum += arr[i];
//     //         if (sum === 0) {
//     //             ++start;
//     //             sum = start;
//     //             break;
//     //         }
//     //         if (sum < 0) {
//     //             start += Math.abs(sum) + 1;
//     //             sum = start;
//     //             break;
//     //         }
//     //         if (i === arr.length - 1) fullLoop = true;
//     //     }
//     // }
//     return start;
// }


// function scatterPalindrome(strToEvaluate) {
//     const results = [];

//     for (let str of strToEvaluate) {
//         let count = 0;

//         for (let i = 0; i , str.length; ++i) {
//             let chars = new Set();

//             for (let j = i; j < str.length; ++j) {
//                 if (chars.has(str[j])) {
//                     chars.delete(str[j]);
//                 } else {
//                     chars.add(str[j]);
//                 }
//                 if (chars.size < 2) ++count;
//             }

//         }

//         results.push(count);

//     }
//     return results;

//     // const strArr = strToEvaluate[0].split('');
//     // const map = {};
//     // for (let char of strArr) {
//     //     map[char] = (map[char] + 1 || 1);
//     // }
//     // let total = 0;
//     // let evens = [];
//     // let odds = [];
//     // for (let entry of Object.entries(map)) {
//     //     let [k, v] = entry;
//     //     if (v % 2 === 0) evens.push([k, v / 2]);
//     //     else {
//     //         odds.push([k, 1]);
//     //         evens.push([k, Math.floor(v / 2)]);
//     //     }
//     // }
//     // for (let even of evens) {
//     //     let [eKey, eVal] = even;
//     //     for (let odd of odds) {
//     //         let [oKey, oVal] = odd;
//     //         if (oKey !== eKey) total += oVal;
//     //     }
//     //     total += eVal;
//     // }
//     // return total;
// }


function findRemainingBalls(direction, strength) {
     const right = [];

     for (let i = 0; i < direction.length; ++i) {
        if (direction[i] > 0) right.push([i, strength[i]]);
     }

     let k = 0;

     for (let j = 0; j < strength.length && k < right.length; ++j) {
        if (direction[j] < 0 && j > right[k][0]) {
            if (strength[j] > right[k][1]) {
                delete strength[right[k][0]];
                ++k;
            } else {
                delete strength[j];
            }
        }
     }

     const results = [];

     for (let l = 0; l < strength.length; ++l) if (strength[l]) results.push(l);

     return results;
    // const left = [];
    // const right = [];
    // for (let i = 0; i < direction.length; ++i) {
    //     let ball = [i, strength[i]];
    //     direction[i] === 1 ? right.push(ball) : left.push(ball);
    // }
    // for (let j = 0; j < right.length; ++j) {
    //     for (let k = 0; k < left.length; ++k) {
    //         if (right[j][0] < left[k][0]) {
    //             if (right[j][1] < left[k][1]) right[j] = 0;
    //             else if (right[j][1] > left[k][1]) left[k] = 0;
    //             else {
    //                 right[j] = 0;
    //                 left[k] = 0;
    //             }
    //         }
    //     }
    // }
    // let results = [];
    // for (let index = 0; index < right.length || index < left.length; ++index) {
    //     if (index < right.length && right[index] !== 0) results.push(right[index][0]);
    //     if (index < left.length && left[index] !== 0) results.push(left[index][0]);
    // }
    // return results;
}


// var isHappy = function(n) {
//     // const numbers = [];
//     // const hash = {};
//     // while (!hash[n] && n !== 1) {
//     //     hash[n] = true;
//     //     while (n >= 10) {
//     //         numbers.push(n % 10);
//     //         n = Math.floor(n / 10);
//     //     }
//     //     numbers.push(n);
//     //     n = 0;
//     //     for (let num of numbers) n += num*num;
//     //     numbers.length = 0;
//     // }
//     // return n === 1;
//     let total = 0;
//     const hash = {};
//     while (!hash[n] && n !== 1) {
//         hash[n] = true;
//         while (n >= 10) {
//             total += (n % 10)**2
//             n = Math.floor(n / 10);
//         }
//         total += n**2;
//         n = total;
//         total = 0;
//     }
//     return n === 1;
// };


// var spiralOrder = function(matrix) {
//     function checkAndAdd(r, c, set, arr, mat) {
//         let coord = '' + r + c;
//             if (!set.has(coord)) {
//                 arr.push(mat[r][c]);
//                 set.add(coord);
//             }
//     }
//     const results = [];
//     const coords = new Set();

//     let x = 0;
//     let w = matrix[0].length - 1;
//     let y = matrix.length - 1;
//     let z = 0;

//     while (results.length < (matrix.length * matrix[0].length)) {

//         for (let i = 0; i < matrix[x].length; ++i) {
//             checkAndAdd(x, i, coords, results, matrix);
//         }
//         ++x;

//         for (let j = 0; j < matrix.length; ++j) {
//             checkAndAdd(j, w, coords, results, matrix);
//         }
//         --w;

//         for (let k = matrix[y].length - 1; k >=0; --k) {
//             checkAndAdd(y, k, coords, results, matrix);
//         }
//         --y;

//         for (let l = matrix.length - 1; l >= 0; --l) {
//             checkAndAdd(l, z, coords, results, matrix);
//         }
//         ++z;
//     }
//     return results;
// };


// var findBall = function(grid) {
//     const results = [];
//     let start = 0;
//     for (let ball = 0; ball < grid[0].length; ++ball) {
//         let r = 0;
//         let c = start;
//         while (r < grid.length) {
//             if (c < grid[r].length - 1 && grid[r][c] === 1 && grid[r][c+1] !== -1) {
//                 ++c;
//             } else if (c > 0 && grid[r][c] === -1 && grid[r][c-1] !== 1) {
//                 --c;
//             } else break;
//             ++r;
//         }
//         r === grid.length ? results.push(c) : results.push(-1);
//         ++start;
//     }
//     return results;
// };


// var longestCommonPrefix = function(strs) {
//     if (strs.length === 1) return strs[0];
//     const chars = strs[0].split('');
//     function checkMatches(str, arr) {
//         let count = 0;
//         for (let i = 0; i < arr.length; ++i) {
//             if (str[i] === arr[i]) ++count;
//             else break;
//         }
//         return count;
//     }
//     let matches = Infinity;
//     for (let i = 1; i < strs.length; ++i) {
//         matches = Math.min(matches, checkMatches(strs[i], chars));
//     }
//     if (matches === Infinity || matches === 0) return '';
//     let matchingChars = '';
//     for (let i = 0; i < matches; ++i) matchingChars += strs[0][i];
//     return matchingChars;
// };


// var multiply = function(num1, num2) {
//     if (num1 === '0' || num2 === '0') return '0';
//     const nums = [num1, num2];
//     for (let i = 0; i < nums.length; ++i) {
//         let position = 1;
//         let num = 0;
//         for (let j = nums[i].length - 1; j >= 0; --j) {
//             num += (Number(nums[i][j]) * position);
//             position *= 10;
//         }
//         nums[i] = num;
//     }
//     return String(nums.reduce((accum, el) => accum * el, 1));
// };


// var containsNearbyDuplicate = function(nums, k) {
//     // const l = nums.length;
//     // for (let i = 0; i < l; ++i) {
//     //     const num = nums[i];
//     //     for (let j = i+1; j < l && j <= i + k; ++j) {
//     //         if (nums[j] === num) return true;
//     //     }
//     // }
//     // return false;
//     const currNums = new Set();
//     let l = 0;
//     let r = 0;
//     while (r < nums.length) {
//         const num = nums[r];
//         if (currNums.has(num)) return true;
//         else currNums.add(num);
//         ++r;
//         if (r - l > k) {
//             currNums.delete(nums[l]);
//             ++l;
//         }
//     }
//     return false;
// };


// var MyStack = function() {
//     this.stack = [];
// };

// MyStack.prototype.push = function(x) {
//     this.stack.push(x);
//     return;
// };

// MyStack.prototype.pop = function() {
//     const el = this.stack.pop();
//     return el;
// };

// MyStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };

// MyStack.prototype.empty = function() {
//     return this.stack.length < 1;
// };


// var summaryRanges = function(nums) {
//     if (!nums.length) return [];
//     nums.push(Infinity);
//     const res = [];
//     let l = 0;
//     for (let r = 1; r < nums.length; ++r) {
//         if (nums[r] - nums[l] !== r - l) {
//             if (r - l >= 2) res.push(nums[l] + '->' + nums[r-1]);
//             else res.push(nums[l].toString());
//             l = r;
//         }
//     }
//     return res;
// };


// var isPowerOfTwo = function(n) {
//     if (n === 1) return true;
//     let num = 2;
//     while (num < n) num *= 2;
//     return num === n;
// };


// var binaryTreePaths = function(root) {
//     const res = [];
//     function dfs(node, path) {
//         if (!node) return;
//         if (!node.left && !node.right) {
//             res.push(path+node.val);
//             return;
//         }
//         path += node.val += '->';
//         dfs(node.left, path);
//         dfs(node.right, path);
//     }
//     dfs(root, '');
//     return res;
// };


// var addDigits = function(num) {
//     let temp = 0;
//     while (num > 0) {
//         temp += num % 10;
//         num = Math.floor(num/10);
//         if (num === 0 && temp > 9) {
//             num = temp;
//             temp = 0;
//         }
//     }
//     return temp;
// };


// var isUgly = function(n) {
//     if (n <= 0) return false;
//     function divide(divisor) {
//         while (n % divisor === 0) {
//             n /= divisor;
//         }
//         return;
//     }
//     divide(2);
//     divide(3);
//     divide(5);
//     return n === 1;
// };


// var wordPattern = function(pattern, s) {
//     s = s.split(' ');
//     if (s.length !== pattern.length) return false;
//     const vals = {};
//     const chars = new Set();
//     for (let i = 0; i < s.length; ++i) {
//         const letter = pattern[i];
//         if (!vals[letter]) {
//             vals[letter] = s[i];
//             chars.add(letter);
//         } else {
//             if (vals[letter] !== s[i]) return false;
//         }
//         for (let char of chars) {
//             if (char !== letter && vals[char] === vals[letter]) return false;
//         }
//     }
//     return true;
// };


// var canWinNim = function(n) {
//     return n % 4 !== 0;
// };


// var NumArray = function(nums) {
//     this.sums = [nums[0]];
//     for (let i = 1; i < nums.length; ++i) {
//         this.sums.push(this.sums[i-1] + nums[i]);
//     }

// };

// NumArray.prototype.sumRange = function(left, right) {
//     if (left === 0) return this.sums[right];
//     else return this.sums[right] - this.sums[left-1];
// };


// var isPowerOfThree = function(n) {
//     if (n <= 0) return false;
//     while (n >= 3) n /= 3;
//     return n === 1;
// };


// var isPowerOfFour = function(n) {
//     if (n <= 0) return false;
//     while (n >= 4) n /= 4;
//     return n === 1;
// };


// var reverseString = function(s) {
//     let l = 0;
//     let r = s.length - 1;
//     while (l < r) {
//         [s[l], s[r]] = [s[r], s[l]];
//         ++l;
//         --r;
//     }
//     return;
// };


// var reverseVowels = function(s) {
//     s = s.split('');
//     let l = 0;
//     let r = s.length - 1;
//     const vowels = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1};
//     while (l < r) {
//         while (!vowels[s[l].toLowerCase()]) ++l;
//         while (!vowels[s[r].toLowerCase()]) --r;
//         [s[l], s[r]] = [s[r], s[l]];
//         ++l;
//         --r;
//     }
//     return s.join('');
// };


// var intersection = function(nums1, nums2) {
//     const nums = new Set(nums1);
//     const res = [];
//     for (let num of nums2) {
//         if (nums.has(num)) {
//             res.push(num);
//             nums.delete(num);
//         }
//     }
//     return res;
// };


// var isPerfectSquare = function(num) {
//     let n = 1;
//     for (let i = 2; n < num; ++i) n = i * i;
//     return n === num;
// };


// var guessNumber = function(n) {
//     if (guess(1) === 0) return 1;
//     if (guess(n) === 0) return n;
//     let l = 1;
//     let r = n;
//     while (l + 1 < r) {
//         let mid = Math.floor((l + r) / 2);
//         let res = guess(mid);
//         if (res === 0) return mid;
//         else if (res < 0) r = mid;
//         else l = mid;
//     }
// };


// var findTheDifference = function(s, t) {
//     const chars = {};
//     for (let char of s) chars[char] = chars[char] ? chars[char] + 1 : 1;
//     for (let char of t) {
//         if (!chars[char]) return char;
//         if (chars[char]) --chars[char];
//     }
// };


// var sumOfLeftLeaves = function(root) {
//     const res = [];
//     const stack = [root];
//     while (stack.length) {
//         let curr = stack.pop();
//         if (curr.left) {
//             if (!curr.left.left && !curr.left.right) res.push(curr.left);
//             else stack.push(curr.left);
//         }
//         if (curr.right) stack.push(curr.right);
//     }
//     return res.reduce((accum, n) => accum + n.val, 0);
// };


// var thirdMax = function(nums) {
//     let min = -Infinity;
//     let mid = -Infinity;
//     let max = -Infinity;
//     for (let num of nums) {
//         if (num > max) {
//             min = mid;
//             mid = max;
//             max = num;
//         } else if (num > mid && num !== max) {
//             min = mid;
//             mid = num;
//         } else if (num > min && num !== mid) min = num;
//     }
//     return min === -Infinity ? max : min;
// };


// var fizzBuzz = function(n) {
//     const res = [];
//     for (let i = 1; i <= n; ++i) {
//         let str = '';
//         if (i % 3 === 0) str += 'Fizz';
//         if (i % 5 === 0) str += 'Buzz';
//         if (!str) str += i;
//         res.push(str);
//     }
//     return res;
// };


// var addStrings = function(num1, num2) {
//     let res = '';
//     let n1L = num1.length - 1;
//     let n2L = num2.length - 1;
//     let rem;
//     while (n1L > -1 || n2L > -1) {
//         let n1 = n1L >= 0 ? num1[n1L] - '0' : 0;
//         let n2 = n2L >= 0 ? num2[n2L] - '0' : 0;
//         let sum = n1 + n2 + (rem || 0);
//         if (sum > 9) {
//             rem = 1;
//             sum = sum % 10;
//         } else rem = undefined;
//         res = sum + res;
//         --n1L;
//         --n2L;
//     }
//     if (rem) res = rem + res;
//     return res;
// };


// var countSegments = function(s) {
//     if (!s) return 0;
//     let count = 0;
//     let i = 0;
//     while (i < s.length) {
//         if (s[i] !== ' ') {
//             while (s[i] !== ' ' && i < s.length) i += 1;
//             count += 1;
//         }
//         i += 1;
//     }
//     return count;
// };


// var arrangeCoins = function(n) {
//     let stairs = 0;
//     for (let i = 1; n > 0; ++i) {
//         if (i > n) break;
//         n -= i;
//         stairs += 1;
//     }
//     return stairs;
// };


// var findDisappearedNumbers = function(nums) {
//     const res = [];
//     const len = nums.length;
//     nums = new Set(nums);
//     for (let i = 1; i <= len; ++i) {
//         if (!nums.has(i)) res.push(i);
//     }
//     return res;
// };


// var findContentChildren = function(g, s) {
//     g.sort((a, b) => a - b);
//     s.sort((a, b) => a - b);
//     let sats = 0;
//     let gi = 0;
//     let si = 0;
//     while (gi < g.length && si < s.length) {
//         if (s[si] >= g[gi]) {
//             ++sats;
//             ++gi;
//             ++si;
//         } else ++si;
//     }
//     return sats;
// };


// var repeatedSubstringPattern = function(s) {
//     if (s.length <= 1) return false;
//     let patt = '';
//     for (let i = 0; i < s.length / 2; ++i) {
//         patt += s[i];
//         if (s.split(patt).join('') === '') return true;
//     }
//     return false;
// };


// var hammingDistance = function(x, y) {
//     x = x.toString(2);
//     y = y.toString(2);
//     const len = x.length > y.length ? x.length : y.length;
//     x = x.padStart(len, '0');
//     y = y.padStart(len, '0');
//     let diff = 0;
//     for (let i = 0; i < x.length; ++i) {
//         if (x[i] !== y[i]) ++diff;
//     }
//     return diff;
//     // const n = (x^y).toString(2);
//     // let diff = 0;
//     // for (let char of n) {
//     //     if (char === '1') ++diff;
//     // }
//     // return diff;
// };


// function check(x, y, mat) {
//     let count = 0;
//     const x0 = x === 0;
//     const xL = x === mat.length - 1;
//     if (x0) ++count;
//     if (xL) ++count;
//     if (!x0 && mat[x-1][y] === 0) ++count;
//     if (!xL && mat[x+1][y] === 0) ++count;
//     const y0 = y === 0;
//     const yL = y === mat[0].length - 1
//     if (y0) ++count;
//     if (yL) ++count;
//     if (!y0 && mat[x][y-1] === 0) ++count;
//     if (!yL && mat[x][y+1] === 0) ++count;
//     return count;
// }
// var islandPerimeter = function(grid) {
//     let perim = 0;
//     for (let i = 0; i < grid.length; ++i) {
//         for (let j = 0; j < grid[i].length; ++j) {
//             if (grid[i][j] === 1) perim += check(i, j, grid);
//         }
//     }
//     return perim;
// };


// var findComplement = function(num) {
//     num = num.toString(2).split('');
//     for (let i = 0; i < num.length; ++i) {
//         if (num[i] === '0') num[i] = '1';
//         else num[i] = '0';
//     }
//     return parseInt(num.join(''), 2);
// };


// var licenseKeyFormatting = function(s, k) {
//     s = s.replaceAll('-', '').split('');
//     let res = '';
//     let group = '';
//     while (s.length) {
//         while (s.length && group.length < k) {
//             const char = s.pop();
//             if (char === '-') continue;
//             group = char.toUpperCase() + group;
//         }
//         if (group.length < k || !s.length) res = group + res;
//         else res = '-' + group + res;
//         group = '';
//     }
//     return res;
// };


// var findMaxConsecutiveOnes = function(nums) {
//     let curr = 0;
//     const len = nums.length;
//     for (let i = 0; i < len; ++i) {
//         const num = nums[i];
//         if (num === 1) ++curr;
//         if (num === 0 || i === len - 1) {
//             max = Math.max(max, curr);
//             curr = 0;
//         }
//     }
//     return max;
// };


// var constructRectangle = function(area) {
//     for (let i = Math.floor(Math.sqrt(area)); i >= 1; --i) {
//         if (area % i === 0) return [area/i, i];
//     }
//     return [area, 1];
// };


// var findPoisonedDuration = function(timeSeries, duration) {
//     let time = duration;
//     for (let i = 1; i < timeSeries.length; ++i) {
//         const poisoned = timeSeries[i-1] + duration;
//         if (poisoned > timeSeries[i]) time -= poisoned - timeSeries[i];
//         time += duration;
//     }
//     return time;
// };


// var findWords = function(words) {
//     const r1 = new Set("qwertyuiop");
//     const r2 = new Set("asdfghjkl");
//     const r3 = new Set("zxcvbnm");
//     const res = [];
//     for (const word of words) {
//         for (const row of [r1, r2, r3]) {
//             let isValid = true;
//             for (const char of word) {
//                 if (!row.has(char.toLowerCase())) {
//                     isValid = false;
//                     break;
//                 }
//             }
//             if (isValid) {
//                 res.push(word);
//                 break;
//             }
//         }
//     }
//     return res;
// };


// var findMode = function(root) {
//     if (!root.left && !root.right) return [root.val];
//     const vals = {};
//     let res = [];
//     function dfs(node) {
//         if (!node) return;
//         const val = node.val + '';
//         vals[val] = vals[val] ? vals[val] + 1 : 1;
//         dfs(node.left);
//         dfs(node.right);
//     }
//     dfs(root);
//     let max = -Infinity;
//     for (let key in vals) {
//         if (vals[key] === max) res.push(key);
//         else if (vals[key] > max) {
//             res = [key];
//             max = vals[key];
//         }
//     }
//     return res;
// };


// var convertToBase7 = function(num) {
//     return num.toString(7);
// };


// var findRelativeRanks = function(score) {
//     const order = score.slice().sort((a, b) => b - a);
//     for (let i = 0; i < score.length; ++i) {
//         const ind = order.indexOf(score[i]);
//         if (ind === 0) {
//             score[i] = 'Gold Medal';
//         } else if (ind === 1) {
//             score[i] = 'Silver Medal';
//         } else if (ind === 2) {
//             score[i] = 'Bronze Medal';
//         } else score[i] = ind+1 + '';
//     }
//     return score;
// };


// var detectCapitalUse = function(word) {
//     if (word.toUpperCase() === word || word.toLowerCase() === word) return true;
//     for (let i = 0; i < word.length; ++i) {
//         if (i === 0 && word[i] !== word[i].toUpperCase()) return false;
//         else if (i > 0 && word[i] !== word[i].toLowerCase()) return false;
//     }
//     return true;
// };


// var arrayPairSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     let sum = 0;
//     for (let i = 0; i < nums.length; i += 2) sum += nums[i];
//     return sum;
// };


// var distributeCandies = function(candyType) {
//     const possible = candyType.length / 2;
//     candyType = new Set(candyType);
//     return possible <= candyType.size ? possible : candyType.size;
// };


// var findLHS = function(nums) {
//     const vals = new Object();
//     let res = 0;
//     for (let num of nums) vals[num] = (vals[num] || 0) + 1;
//     for (let k in vals) {
//         k = k - '0';
//         const upper = vals[k+1] ? vals[k+1] : 0;
//         const lower = vals[k-1] ? vals[k-1] : 0;
//         const val = vals[k];
//         if (upper > 0 || lower > 0) {
//             res = Math.max(res, val + upper, val + lower);
//         }
//     }
//     return res;
// };


// var checkPerfectNumber = function(num) {
//     let max = Math.floor(num / 2);
//     let sum = 0;
//     for (let i = 1; i <= max; ++i) {
//         if (num % i === 0) sum += i;
//     }
//     return sum === num;
// };


// var getMinimumDifference = function(root) {
//     const vals = [];
//     const recurse = (node) => {
//         if (!node) return;
//         recurse(node.left);
//         vals.push(node.val);
//         recurse(node.right);
//     }
//     recurse(root);
//     let min = Infinity;
//     for (let i = 1; i < vals.length; ++i) {
//         const val = vals[i] - vals[i-1];
//         if (val < min) min = val;
//     }
//     return min;
// };


// var reverseStr = function(s, k) {
//     const len = s.length;
//     let group = k * 2;
//     let i = 0;
//     let res = [];
//     while (true) {
//         let curr = '';
//         for (let j = 0; j < k && i < len; ++j, ++i) curr = s[i] + curr;
//         for (;i < len && i < group; ++i) curr += s[i];
//         group += k * 2;
//         res.push(curr);
//         if (i >= len) break;
//     }
//     return res.join('');
// };


// var checkRecord = function(s) {
//     let absent = 0;
//     for (let i = 0; i < s.length; ++i) {
//         if (i >= 2 && s[i] === 'L' && s[i-1] === 'L' && s[i-2] === 'L') return false;
//         if (s[i] === 'A') absent += 1;
//     }
//     return absent < 2;
// };


// var reverseWords = function(s) {
//     const len = s.length;
//     let res = '';
//     for (let i = 0; i < len; ++i) {
//         let curr = '';
//         while (i < len && s[i] !== ' ') {
//             curr = s[i] + curr;
//             ++i;
//         }
//         if (i < len && s[i] === ' ') res += curr + ' ';
//         else res += curr;
//     }
//     return res;
// };


// var maxDepth = function(root) {
//     function dfs(node) {
//         if (!node) return 0;
//         let max = 0;
//         for (let child of node.children) max = Math.max(max, dfs(child));
//         return max + 1;
//     }
//     return dfs(root);
// };


// var findTilt = function(root) {
//     let sum = 0;
//     function dfs(node, total) {
//         if (!node) return 0;
//         const left = dfs(node.left, total);
//         const right = dfs(node.right, total);
//         sum += Math.abs(left - right);
//         return total + node.val + left + right;
//     }
//     dfs(root, 0);
//     return sum;
// };


// var postorder = function(root) {
//     const res = [];
//     function dfs(node) {
//         if (!node) return;
//         for (let child of node.children) dfs(child);
//         res.push(node.val);
//     }
//     dfs(root);
//     return res;
// };


// var maxCount = function(m, n, ops) {
//     if (!ops.length) return m * n;
//     // let [x, y] = [m, n];
//     // for (const [r, c] of ops) {
//     //     x = Math.min(x, r);
//     //     y = Math.min(y, c);
//     // }
//     // return x * y;
//     const matObj = {};
//     let max = 0;
//     let count = 0;
//     for (const [x, y] of ops) {
//         for (let i = 0; i < x; ++i) {
//             for (let j = 0; j < y; ++j) {
//                 const key = i + '-' + j;
//                 matObj[key] = (matObj[key] || 0) + 1;
//                 if (matObj[key] > max) {
//                     max = matObj[key];
//                     count = 1;
//                 } else if (matObj[key] === max) ++count;
//                 else continue;
//             }
//         }
//     }
//     return count;
// };


// var findRestaurant = function(list1, list2) {
//     const words1 = {};
//     for (let i = 0; i < list1.length; ++i) {
//         const word = list1[i];
//         words1[word] = i;
//     }
//     let min = Infinity;
//     let res = [];
//     for (let i = 0; i < list2.length; ++i) {
//         const word = list2[i];
//         if (words1[word] >= 0) {
//             const val = words1[word] + i;
//             if (val < min) {
//                 res = [word];
//                 min = val;
//             } else if (val === min) res.push(word);
//         }
//     }
//     return res;
// };


// var canPlaceFlowers = function(flowerbed, n) {
//     let i = 0;
//     const len = flowerbed.length;
//     while (n > 0 && i < len) {
//         const prev = i > 0 ? flowerbed[i-1] : 0;
//         const curr = flowerbed[i];
//         const next = i < len - 1 ? flowerbed[i+1] : 0;
//         if (prev === 0 && curr === 0 && next === 0) {
//             flowerbed[i] = 1;
//             --n;
//         }
//         ++i;
//     }
//     return n <= 0;
// };


// var tree2str = function(root) {
//     let str = '' + root.val;
//     function dfs(node) {
//         if (!node) return '';
//         str += '(' + node.val;
//         dfs(node.left);
//         if (node.right && !node.left) str += '()';
//         dfs(node.right);
//         str += ')';
//         return '';
//     }
//     dfs(root.left);
//     if (root.right && !root.left) str += '()';
//     dfs(root.right);
//     return str;
// };


// var mergeTrees = function(root1, root2) {
//     function dfs(n1, n2) {
//         if (!n1 && !n2) return null;
//         const left = dfs(n1?.left, n2?.left);
//         const right = dfs(n1?.right, n2?.right);
//         let sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0);
//         const newN = new TreeNode(sum, left, right);
//         return newN;
//     }
//     return dfs(root1, root2);
// };


// var maximumProduct = function(nums) {
//     nums.sort((a, b) => a - b);
//     const last = nums.length - 1;
//     //three largest numbers vs. largest and two smallest negative numbers
//     return Math.max(nums[last]*nums[last-1]*nums[last-2], nums[last]*nums[0]*nums[1]);
// };


// var averageOfLevels = function(root) {
//     const res = [];
//     const stack = [root];
//     while (stack.length) {
//         let curr = stack.pop();
//         let nodes = 0;
//         let sum = 0;
//         let level = [];
//         while (curr) {
//             if (curr.left) level.push(curr.left);
//             if (curr.right) level.push(curr.right);
//             ++nodes;
//             sum += curr.val;
//             curr = stack.pop()
//         }
//         res.push(sum / nodes);
//         stack.push(...level);
//     }
//     return res;
// };


// var findMaxAverage = function(nums, k) {
//     let sum = 0;
//     for (let i = 0; i < k; ++i) sum += nums[i];
//     let max = sum;
//     for (let j = k; j < nums.length; ++j) {
//         sum -= nums[j-k];
//         sum += nums[j];
//         if (sum > max) max = sum;
//     }
//     return max / k;
// };


// var findErrorNums = function(nums) {
//     const res = [];
//     const numbers = new Set();
//     for (let i = 1; i <= nums.length; ++i) numbers.add(i);
//     for (let num of nums) {
//         if (numbers.has(num)) numbers.delete(num);
//         else res.push(num);
//     }
//     res.push(...numbers);
//     return res;
// };


// var findTarget = function(root, k) {
//     const res = new Set();
//     function dfs(node) {
//         if (!node) return false;
//         if (res.has(node.val)) return true;
//         res.add(k - node.val);
//         return dfs(node.left) || dfs(node.right);
//     }
//     return dfs(root);
// };


// var judgeCircle = function(moves) {
//     let x = 0;
//     let y = 0;
//     for (let i = 0; i < moves.length; ++i) {
//         switch (moves[i]) {
//             case 'U':
//                 ++y;
//                 break;
//             case 'D':
//                 --y;
//                 break;
//             case 'R':
//                 ++x;
//                 break;
//             case 'L':
//                 --x;
//                 break;
//         }
//     }
//     return x === 0 && y === 0;
// };


// var imageSmoother = function(img) {
//     const res = [];
//     const matLen = img.length;
//     const nestLen = img[0].length;
//     for (let i = 0; i < matLen; ++i) {
//         const level = [];
//         for (let j = 0; j < nestLen; ++j) {
//             let num = img[i][j];
//             let nums = 1;

//             for (let [x, y] of [[-1,0],[0,-1],[-1,-1],[-1,1],[1,-1],[0,1],[1,0],[1,1]]) {
//                 const [r, c] = [i+x, j+y];
//                 if (r >= 0 && r < matLen && c >= 0 && c < nestLen) {
//                     num += img[r][c];
//                     ++nums;
//                 }
//             }
//             level.push(Math.floor(num / nums));
//         }
//         res.push(level);
//     }
//     return res;
// };


// var findSecondMinimumValue = function(root) {
//     let small;
//     let smaller;
//     function dfs(n) {
//         if (!n) return;
//         if (!smaller) {
//             smaller = n.val;
//         } else if (n.val < smaller) {
//             small = smaller;
//             smaller = n.val;
//         } else if (n.val !== smaller) {
//             if (!small || n.val < small) small = n.val;
//         }
//         dfs(n.left);
//         dfs(n.right);
//     }
//     dfs(root);
//     return small ? small : -1;
// };


// var findLengthOfLCIS = function(nums) {
//     let max = 1;
//     let seq = 1;
//     for (let i = 1; i < nums.length; ++i) {
//         if (nums[i] > nums[i-1]) ++seq;
//         else seq = 1;
//         max = Math.max(max, seq);
//     }
//     return max;
// };


// var calPoints = function(operations) {
//     const res = [];
//     let sum = 0;
//     function addAndPush(val) {
//         res.push(val);
//         sum += val;
//     }
//     for (let op of operations) {
//         const last = res.length - 1;
//         let curr;
//         if (op === '+') {
//             curr = res[last] + res[last-1];
//             addAndPush(curr);
//         } else if (op === 'D') {
//             curr = res[last] * 2;
//             addAndPush(curr);
//         } else if (op === 'C') {
//             const removed = res.pop();
//             sum -= removed;
//         } else {
//             curr = op - '0'
//             addAndPush(curr);
//         }
//     }
//     return sum;
// };


// var hasAlternatingBits = function(n) {
//     n = n.toString(2);
//     for (let i = 1; i < n.length; ++i) {
//         if (n[i] === n[i-1]) return false;
//     }
//     return true;
// };


// var searchBST = function(root, val) {
//     function dfs(n) {
//         if (!n) return null;
//         if (n.val === val) return n;
//         return dfs(n.left) || dfs(n.right);
//     }
//     return dfs(root);
// };


// var MyHashSet = function() {
//     this.set = new Set();
// };

// MyHashSet.prototype.add = function(key) {
//     this.set.add(key);
// };

// MyHashSet.prototype.remove = function(key) {
//     this.set.delete(key);
// };

// MyHashSet.prototype.contains = function(key) {
//     return this.set.has(key);
// };


// var MyHashMap = function() {
//     this.map = {};
// };

// MyHashMap.prototype.put = function(key, value) {
//     this.map[key] = value;
// };

// MyHashMap.prototype.get = function(key) {
//     return this.map[key] !== undefined ? this.map[key] : -1;
// };

// MyHashMap.prototype.remove = function(key) {
//     delete this.map[key];
// };


// var toLowerCase = function(s) {
//     let res = '';
//     for (let char of s) {
//         const code = char.charCodeAt();
//         if (code < 65 || code > 90) {
//             res += char;
//         } else res += String.fromCharCode(code + 32);
//     }
//     return res;
// };


// var isOneBitCharacter = function(bits) {
//     const len = bits.length;
//     let curr = '';
//     for (let i = 0; i < len; ++i) {
//         curr += bits[i];
//         if (i === len - 1 && curr !== '0') return false;
//         if (curr === '0' || curr === '10' || curr === '11') curr = '';
//     }
//     return true;
// };


// function isSelfDividing(n) {
//     let curr = n;
//     while (curr > 0) {
//         let remain = curr % 10;
//         if (n % remain !== 0) return false;
//         curr = Math.floor(curr / 10);
//     }
//     return true;
// }
// var selfDividingNumbers = function(left, right) {
//     const res = [];
//     while (left <= right) {
//         if (isSelfDividing(left)) res.push(left);
//         ++left;
//     }
//     return res;
// };


// var nextGreatestLetter = function(letters, target) {
//     for (let char of letters) {
//         if (char > target) return char;
//     }
//     return letters[0];
// };


// var dominantIndex = function(nums) {
//     let largest = -Infinity;
//     let lIndex  = -1;
//     let large = -Infinity;
//     for (let i = 0; i < nums.length; ++i) {
//         const num = nums[i];
//         if (num > largest) {
//             large = largest;
//             largest = num;
//             lIndex = i;
//         } else if (num > large) large = num;
//     }
//     return largest >= large*2 ? lIndex : -1;
// };


// var isToeplitzMatrix = function(matrix) {
//     for (let i = 1; i < matrix.length; ++i) {
//         for (let j = 1; j < matrix[0].length; ++j) {
//             if (matrix[i][j] !== matrix[i-1][j-1]) return false;
//         }
//     }
//     return true;
// };


// var numJewelsInStones = function(jewels, stones) {
//     const jewelMap = {};
//     for (let jewel of jewels) jewelMap[jewel] = 1;
//     let count = 0;
//     for (let stone of stones) {
//         count += jewelMap[stone] ?? 0;
//     }
//     return count;
// };


// function toOBJ(str) {
//     const obj = {};
//     for (let char of str) {
//         const code = char.charCodeAt();
//         if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//             char = char.toLowerCase();
//             obj[char] = (obj[char] ?? 0) + 1;
//         }
//     }
//     return obj;
// };
// function compareOBJS(need, have) {
//     for (let k in need) {
//         if (!have[k] || have[k] < need[k]) return false;
//     }
//     return true;
// }
// var shortestCompletingWord = function(licensePlate, words) {
//     const needed = toOBJ(licensePlate);
//     let res;
//     for (let word of words) {
//         const curr = toOBJ(word);
//         if (compareOBJS(needed, curr) && (!res || word.length < res.length)) res = word;
//     }
//     return res;
// };


// var rotateString = function(s, goal) {
//     let shift = '';
//     for (let i = 0; i < s.length; ++i) {
//         const char = s[i];
//         if (char === goal[0] && s.slice(i) + shift === goal) return true;
//         shift += char;
//     }
//     return false;
// };


// var uniqueMorseRepresentations = function(words) {
//     const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
//     const variations = new Set();
//     for (let word of words) {
//         let morse = '';
//         for (let char of word) {
//             morse += morseCodes[char.charCodeAt()-97];
//         }
//         variations.add(morse);
//     }
//     return variations.size;
// };


// var numberOfLines = function(widths, s) {
//     const res = [1, 0];
//     let curr = 100;
//     for (let char of s) {
//         const width = widths[char.charCodeAt()-97];
//         if (width > curr) {
//             ++res[0];
//             curr = 100;
//         }
//         curr -= width;
//     }
//     res[1] = 100 - curr;
//     return res;
// };


// var minDiffInBST = function(root) {
//     const vals = [];
//     function traverse(n) {
//         if (!n) return;
//         traverse(n.left);
//         vals.push(n.val);
//         traverse(n.right);
//     }
//     traverse(root);
//     let min = Infinity;
//     for (let i = 1; i < vals.length; ++i) {
//         min = Math.min(min, vals[i] - vals[i-1]);
//     }
//     return min;
// };


// var mostCommonWord = function(paragraph, banned) {
//     banned = new Set(banned);
//     paragraph = paragraph.toLowerCase().split(/\W+/);
//     const words = {};
//     let mostCommon;
//     for (let word of paragraph) {
//         word = word.toLowerCase();
//         if (!banned.has(word)) {
//             words[word] = (words[word] ?? 0) + 1;
//             if (!mostCommon || words[word] > words[mostCommon]) mostCommon = word;
//         }
//     }
//     return mostCommon;
// };


// var toGoatLatin = function(sentence) {
//     sentence = sentence.split(' ');
//     const vowels = new Set('aeiouAEIOU');
//     let ending = 'a';
//     let res = '';
//     for (let i = 0; i < sentence.length; ++i) {
//         const word = sentence[i];
//         if (i > 0) res += ' ';
//         if (vowels.has(word[0])) {
//             res += word + 'ma' + ending;
//         } else res += word.slice(1, word.length) + word[0] + 'ma' + ending;
//         ending += 'a';
//     }
//     return res;
// };


// var largeGroupPositions = function(s) {
//     const res = [];
//     const len = s.length;
//     for (let i = 0; i < len; ++i) {
//         for (let j = i+1; j < len; ++j) {
//             if (s[j] !== s[j-1]) {
//                 if (j - i >= 3) res.push([i, j-1]);
//                 i = j;
//             } else if (j === len-1 && s[j] === s[j-1] && j - i + 1 >=3) {
//                 res.push([i, j]);
//                 i = j;
//                 }
//         }
//     }
//     return res;
// };

// function flipOneZero(n) {
//     if (n === 1) return 0;
//     return 1;
// }
// var flipAndInvertImage = function(image) {
//     for (let i = 0; i < image.length; ++i) {
//         let l = 0;
//         let r = image[i].length - 1;
//         while (l <= r) {
//             if (l === r) image[i][l] = flipOneZero(image[i][l]);
//             else {
//                 const temp = flipOneZero(image[i][l]);
//                 image[i][l] = flipOneZero(image[i][r]);
//                 image[i][r] = temp;
//             }
//             ++l;
//             --r;
//         }
//     }
//     return image;
// };


// var lemonadeChange = function(bills) {
//     let fives = 0;
//     let tens = 0;
//     for (let bill of bills) {
//         let currBill = bill;
//         while (currBill > 5) {
//             if (currBill > 10 && tens > 0) {
//                 currBill -= 10;
//                 --tens;
//             } else if (currBill > 5 && fives > 0) {
//                 currBill -= 5;
//                 --fives;
//             } else return false;
//         }
//         if (bill === 10) ++tens;
//         if (bill === 5) ++fives;
//     }
//     return true;
// };


// var transpose = function(matrix) {
//     const newCol = matrix.length;
//     const res = [];
//     let level = [];
//     for (let j = 0; j < matrix[0].length; ++j) {
//         for (let i = 0; i < newCol; ++i) {
//             level.push(matrix[i][j]);
//             if (level.length === newCol) {
//                 res.push(level);
//                 level = [];
//             }
//         }
//     }
//     return res;
// };


// var isMonotonic = function(nums) {
//     let asc = true;
//     let desc = true;
//     for (let i = 1; i < nums.length; ++i) {
//         const curr = nums[i];
//         const prev = nums[i-1];
//         if (curr === prev) continue;
//         if (curr < prev && asc) asc = false;
//         if (curr > prev && desc) desc = false;
//     }
//     return asc || desc;
// };


// var buildArray = function(nums) {
//     return nums.map(el => nums[el]);
// };


// var getConcatenation = function(nums) {
//     const len = nums.length;
//     for (let i = 0; i < len; ++i) nums.push(nums[i]);
//     return nums;
// };


// var shuffle = function(nums, n) {
//     let j = n;
//     const res = [];
//     for (let i = 1; i < n; ++i, ++j) {
//         res.push(nums[i]);
//         res.push(nums[j]);
//     }
//     return res;
// };


// var finalValueAfterOperations = function(operations) {
//     return operations.reduce((accum, el) => {
//         if (el[1] === '+') return accum + 1;
//         else return accum - 1;
//     }, 0);
// };


// var leftRigthDifference = function(nums) {
//     let rSum = nums.reduce((accum, el) => accum + el, 0);
//     let lSum = 0;
//     const res = [];
//     for (let i = 0; i < nums.length; ++i) {
//         const num = nums[i];
//         rSum -= num;
//         res.push(Math.abs(lSum - rSum));
//         lSum += num;
//     }
//     return res;
// };


// var numIdenticalPairs = function(nums) {
//     let pairs = 0;
//     const map = {};
//     for (let num of nums) {
//         const curr = map[num];
//         if (curr) {
//             pairs += curr;
//             ++map[num];
//         } else map[num] = 1;
//     }
//     return pairs;
// };


// var kidsWithCandies = function(candies, extraCandies) {
//     const biggest = Math.max(...candies);
//     for (let i = 0; i < candies.length; ++i) {
//         const newCount = candies[i] + extraCandies;
//         if (biggest <= newCount) candies[i] = true;
//         else candies[i] = false;
//     }
//     return candies;
// };


// var mostWordsFound = function(sentences) {
//     let max = 0;
//     for (let sen of sentences) max = Math.max(max, sen.split(' ').length);
//     return max;
// };


// var smallerNumbersThanCurrent = function(nums) {
//     const sorted = nums.slice().sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; ++i) nums[i] = sorted.indexOf(nums[i]);
//     return nums;
// };


// var sortArrayByParity = function(nums) {
//     let l = 0;
//     let r = nums.length - 1;
//     while (l < r) {
//         while (nums[l] % 2 === 0 && l < r) ++l;
//         while (nums[r] % 2 !== 0 && l < r) --r;
//         if (l < r) [nums[l], nums[r]] = [nums[r], nums[l]];
//         ++l;
//         --r;
//     }
//     return nums;
// };


// var hasGroupsSizeX = function(deck) {
//     const counts = {};
//     for (let num of deck) counts[num] = (counts[num] ?? 0) + 1;
//     const vals = Object.values(counts);
//     function gcd(x, y) {
//         let n1 = x;
//         let n2 = y;
//         while (n2 !== 0) {
//             let div = n1 % n2;
//             n1 = n2;
//             n2 = div;
//         }
//         return n1;
//     }
//     return vals.reduce((accum, el) => gcd(accum, el), vals[0]) > 1;
// };


// var sortArrayByParityII = function(nums) {
//     const len = nums.length;
//     let even = 0;
//     let odd = 0;
//     while (even < len && odd < len) {
//         while (even < len) {
//             if (nums[even] % 2 === 0 && even % 2 !== 0) break;
//             ++even;
//         }
//         while (odd < len) {
//             if (nums[odd] % 2 !== 0 && odd % 2 === 0) break;
//             ++odd;
//         }
//         if (even < len && odd < len) even < odd ? [nums[even], nums[odd]] = [nums[odd], nums[even]] : [nums[odd], nums[even]] = [nums[even], nums[odd]];
//         ++even;
//         ++odd;
//     }
//     return nums;
// };


// var numUniqueEmails = function(emails) {
//     const unique = new Set();
//     for (let email of emails) {
//         let beforeAt = true;
//         let formatEmail = '';
//         for (let i = 0; i < email.length; ++i) {
//             const char = email[i];
//             if (beforeAt) {
//                 if (char === '@') beforeAt = false;
//                 if (char === '.') continue;
//                 else if (char === '+') {
//                     while (email[i+1] !== '@') ++i;
//                 } else formatEmail += char;
//             } else formatEmail += char;
//         }
//         unique.add(formatEmail);
//     }
//     return unique.size;
// };


// var leafSimilar = function(root1, root2) {
//     function dfs(n, arr=[]) {
//         if (!n) return;
//         const leaf = !n.left && !n.right;
//         if (leaf) arr.push(n.val);
//         if (!leaf) {
//             dfs(n.left, arr);
//             dfs(n.right, arr);
//         }
//         return arr;
//     }
//     const vals1 = dfs(root1);
//     const vals2 = dfs(root2);
//     const len = vals1.length;
//     if (len !== vals2.length) return false;
//     for (let i = 0; i < len; ++i) {
//         if (vals1[i] !== vals2[i]) return false;
//     }
//     return true;
// };


// function isLetter(char) {
//     const code = char.charCodeAt();
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) return true;
//     return false;
// }
// var reverseOnlyLetters = function(s) {
//     s = s.split('');
//     let l = 0;
//     let r = s.length - 1;
//     while (l < r) {
//         const lChar = s[l];
//         const lIsL = isLetter(lChar);
//         const rChar = s[r];
//         const rIsL = isLetter(rChar);
//         if (lIsL && rIsL) {
//             [s[l], s[r]] = [s[r], s[l]];
//             ++l;
//             --r;
//         }
//         if (!lIsL) ++l;
//         if (!rIsL) --r;
//     }
//     return s.join('');
// };


// var validMountainArray = function(arr) {
//     const len = arr.length;
//     if (len < 3) return false;
//     let i = 0;
//     while (i < len-1 && arr[i] < arr[i+1]) ++i;
//     if (i === len-1 || i === 0) return false;
//     while (i < len-1 && arr[i] > arr[i+1]) ++i;
//     return i === len-1;
// };


// var myAtoi = function(s) {
//     const max = Math.pow(2, 31) - 1;
//     const min = -Math.pow(2, 31);
//     const val = parseInt(s);
//     if (Number.isNaN(val)) return 0;
//     return Math.max(min, Math.min(max, val));
// };


// var letterCombinations = function(digits) {
//     if (!digits) return [];
//     const lets = {
//         2: ['a', 'b', 'c'],
//         3: ['d', 'e', 'f'],
//         4: ['g', 'h', 'i'],
//         5: ['j', 'k', 'l'],
//         6: ['m', 'n', 'o'],
//         7: ['p', 'q', 'r', 's'],
//         8: ['t', 'u', 'v'],
//         9: ['w', 'x', 'y', 'z']
//     }
//     let res = new Set(['']);
//     for (let dig of digits) {
//         let newRes = new Set();
//         for (let str of res) {
//             for (let char of lets[dig]) {
//                 newRes.add(str+char);
//             }
//         }
//         res = newRes;
//     }
//     return [...res];
// };


var divide = function(dividend, divisor) {

};
