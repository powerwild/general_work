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


var findLHS = function(nums) {
    const vals = new Object();
    let res = 0;
    for (let num of nums) vals[num] = (vals[num] || 0) + 1;
    for (let k in vals) {
        k = k - '0';
        const upper = vals[k+1] ? vals[k+1] : 0;
        const lower = vals[k-1] ? vals[k-1] : 0;
        const val = vals[k];
        if (upper > 0 || lower > 0) {
            res = Math.max(res, val + upper, val + lower);
        }
    }
    return res;
};
