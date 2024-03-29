// var addTwoNumbers = function(l1, l2) {
//     let node1Val = '';
//     let node2Val = '';
//     let currNode = l1;
//     while (currNode) {
//         node1Val = (currNode.val).toString() + node1Val;
//         currNode = currNode.next;
//     };
//     currNode = l2;
//     while (currNode) {
//         node2Val = (currNode.val).toString() + node2Val;
//         currNode = currNode.next;
//     }
//     let newVal;
//     if (node1Val.length > node2Val.length) {
//         newVal = node1Val.slice((node1Val.length - 1) - node2Val.length) + (parseInt(node1Val.slice((node1Val.length - 1) - node2Val.length, node1Val.length)) + parseInt(node2Val)).toString();
//     } else if (node1Val.length < node2Val.length) {
//         newVal = node2Val.slice((node2Val.length - 1) - node1Val.length) + (parseInt(node2Val.slice((node2Val.length - 1) - node1Val.length, node2Val.length)) + parseInt(node1Val)).toString();
//     } else {
//         newVal = (parseInt(node1Val) + parseInt(node2Val)).toString();
//     }
//     let newHead = null;
//     let prevNode;
//     for (let i = newVal.length - 1; i >= 0; i--) {
//         if (newHead === null) {
//             newHead = new ListNode(newVal[i]);
//             prevNode = newHead;
//             continue
//         }
//         currNode = new ListNode(newVal[i]);
//         prevNode.next = currNode;
//         prevNode = currNode;
//     }
//     return newHead
// }


// need to refactor for speed
var isAnagram = function(s, t) {
    if (!s && !t) return true
    if (!s || !t) return false;
    if (s.length !== t.length) return false;
    first = {};
    second = {};
    for(let i = 0; i < s.length; i++) {
        if (!first[s[i]]) first[s[i]] = 1;
        else first[s[i]] += 1;
    }
    for(let j = 0; j < t.length; j++) {
        if (!second[t[j]]) second[t[j]] = 1;
        else second[t[j]] += 1;
    }
    let keys = Object.keys(first);
    for (let k in keys) {
        let key = keys[k];
        if (!second[key] || first[key] !== second[key]) return false;
        else delete second[key];
    }
    if (second.length > 0) return false;
    else return true;
};
var groupAnagrams = function(strs) {
    if (strs.length === 1) return [[strs[0]]];
    let hash = {};
    for (let s of strs) hash[s] = [];
    for (let x of Object.keys(hash)) {
        for (let y of strs) {
            if (hash[x] && isAnagram(x, y)) {
                if (y === '') hash[x].push('');
                else hash[x].push(y);
                if (x !== y) delete hash[y];
            }
        }
    }
    return Object.values(hash).sort((a, b) => a.length - b.length);
};


// var topKFrequent = function(nums, k) {
//     if (nums.length === 1) return nums;
//     let hash = {};
//     for (let num of nums) {
//         if (!hash[num.toString()]) hash[num.toString()] = [1, num];
//         else hash[num.toString()][0] += 1;
//     }
//     let counts = Object.values(hash).sort((a, b) => b[0] - a[0]);
//     return counts.slice(0, k).map(el => el[1])
// };

// console.log(topKFrequent([1,1,1,2,2,3,], 2))


// var productExceptSelf = function(nums) {
//     let total = 1;
//     let exempt = 0;
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (exempt !== i) total *= nums[i];
//         if (i === nums.length - 1) {
//             arr.push(total);
//             total = 1;
//             if (exempt < nums.length - 1) i = -1;
//             exempt += 1;
//         }
//     }
//     return arr;
// };
// console.log(productExceptSelf([1,2,3,4]))


// var isPalindrome = function(s) {
//     let arr = s.split('').map(el => {
//         let code = el.charCodeAt();
//         if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122) return el.toLowerCase();
//     });
//     let original = arr.join('');
//     arr.reverse();
//     return arr.join('') === original;
// };
// console.log(isPalindrome('A man, a plan, a canal: Panama'))


// var twoSum = function(numbers, target) {
//     let hash = {};
//     for (let i = 0; i < numbers.length; i++) {
//         if (hash[`${numbers[i]}`]) return [hash[`${numbers[i]}`], i+1];
//         else hash[`${target - numbers[i]}`] = i+1;
//     }
// };
// console.log(twoSum([2,3,4], 6))


// var threeSum = function(nums) {
//     if (nums.length < 3) return [];
//     let sets = [];
//     nums.sort((a, b) => a - b);
//     for (let i in nums) {
//         if (i > 0 && nums[i] === nums[i-1]) continue;
//         let left = parseInt(i) + 1;
//         let right = nums.length - 1;
//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];
//             if (sum > 0) right--;
//             else if (sum < 0) left++;
//             else {
//                 sets.push([nums[i], nums[left], nums[right]]);
//                 left++;
//                 while (nums[left] === nums[left-1]) left++;
//             }
//         }
//     }
//     return sets;
// };
// console.log(threeSum([-1,0,1,2,-1,-4]))


// var isValidSudoku = function(board) {
//     for(let i = 0; i < 9; i++){
//         const hash = {};
//         for(let j = 0; j < 9; j++){
//             const value = board[i][j];
//             if (value < 1 || value > 9) return false;
//             if(value === '.') continue;
//             if(hash[value]) return false;

//             hash[value] = true;
//         }
//     }

//     for(let i = 0; i < 9; i++){
//         const hash = {};
//         for(let j = 0; j < 9; j++){
//             const value = board[j][i];
//             if(value === '.') continue;
//             if(hash[value]) return false;
//             hash[value] = true;
//         }
//     }

//     let start1 = 0;
//     while(start1 < 9){
//         let start2 = 0;
//         while(start2 < 9){
//             const hash = {};
//             for(let i = start1; i < start1 + 3; i++){
//                 for(let j = start2; j < start2 + 3; j++){
//                     const value = board[i][j];
//                     if(value === '.') continue;
//                     if(hash[value]) return false;
//                     hash[value] = true;
//                 }
//             }
//             start2 += 3;
//         }
//         start1 += 3;
//     }

//     return true;
// };
// console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]))


// const encode = (strs) => {
//     let string = strs[0];
//     for (let s of strs.slice(1)) {
//         string += `<>${s}`;
//     }
//     return string;
// }
// const out = encode(["we", "say", ":", "yes"]);
// console.log(out)
// const decode = (str) => {
//     return str.split('<>');
// }
// console.log(decode(out))


// var longestConsecutive = function(nums) {
//     if (nums.length < 1) return 0;
//     nums = [...new Set(nums.sort((a, b) => a-b))];
//     let findex = 0;
//     let lindex = 0;
//     let longest = 0;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i-1] === nums[i] - 1) lindex = i;
//         else {
//             longest = longest < (lindex - findex) ? (lindex - findex) : longest;
//             findex = i;
//             lindex = i;
//         }
//         if (i === nums.length - 1) longest = longest < (lindex - findex) ? (lindex - findex) : longest;
//     }
//     return longest + 1;
// };
// console.log(longestConsecutive([1,2,0,1]))


// var trap = function(height) {
//     if (height.length < 1) return 0;
//     let l = 0;
//     let r = height.length - 1;
//     let lmax = height[l];
//     let rmax = height[r];
//     let rain = 0;
//     while (l < r) {
//         if (lmax < rmax) {
//             l++;
//             lmax = Math.max(lmax, height[l]);
//             console.log('left------', lmax - height[l])
//             rain += lmax - height[l];
//         } else {
//             r--;
//             rmax = Math.max(rmax, height[r]);
//             console.log('right-------', rmax - height[r])
//             rain += rmax - height[r];
//         }
//     }
//     return rain;
// };
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))


// var minWindow = function(s, t) {
//     if (t.length > s.length) return '';
//     if (t === s) return s;
//     const tLetters = {};
//     const window = {};
//     for (let l of t) tLetters[l] = tLetters[l] ? tLetters[l] + 1 : 1;
//     let have = 0;
//     let need = t.length;
//     let res = [-1, -1];
//     let resLength = Infinity;
//     let left = 0;
//     for (let right = 0; right < s.length; right++) {
//         window[s[right]] = window[s[right]] ? window[s[right]] + 1 : 1;
//         if (tLetters[s[right]] && window[s[right]] === tLetters[s[right]]) have += 1;
//         console.log('t----', tLetters)
//         console.log('w-----', window)
//         while (have > need) {
//             if (right - left + 1 < resLength) {
//                 res = [left, right];
//                 resLength = right - left + 1;
//             }
//             window[s[left]] -= 1;
//             if (tLetters[s[left]] && window[s[left]] < tLetters[s[left]]) have -= 1;
//             left += 1;
//         }
//     }
//     return resLength === Infinity ? '' : s.slice(res[0], res[1]+1)
// };
// console.log(minWindow("ADOBECODEBANC", "ABC"))
// // console.log(minWindow('a', 'a'))
// console.log(minWindow("bbaa", "aba"))

// const addIslands = (grid, xy, memo) => {
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

// const numIslands = (grid) => {
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
// }
// console.log(numIslands([["1","1","1","1","0"], ["1","1","0","1","0"], ["1","1","0","0","0"], ["0","0","0","0","0"]]));
// console.log(numIslands([["1","1","0","0","0"], ["1","1","0","0","0"], ["0","0","1","0","0"], ["0","0","0","1","1"]]));


// const cloneGraph = (node) => {
//     if (node === null) return null;
//     const visited = new Set(String(node.val));
//     const q = [node];
//     const root = new Node(node.val);
//     const hash = {};
//     hash[String(root.val)] = root;
//     let curr;
//     while (q.length) {
//         curr = q.pop();
//         if (!visited.has(String(curr.val))) {
//             visited.add(String(curr.val))
//             hash[String(curr.val)] = new Node(curr.val);
//         }
//         for (let n of curr.neighbors) {
//             if (!visited.has(String(n.val))) {
//                 visited.add(String(n.val));
//                 q.push(n);
//                 hash[String(n.val)] = new Node(n.val);
//             }
//             hash[curr.val].neighbors.push(hash[String(n.val)]);
//         }
//     }
//     return root;
// }


// function solution(N, K) {
//     const arr = String(N).split('');
//     let index = 0;
//     while (index < arr.length) {
//         let curr = parseInt(arr[index]);
//         if (K > 0) {
//             while (K > 0 && curr < 9) {
//                 K -= 1;
//                 curr += 1;
//             }
//             arr[index] = String(curr);
//         }
//         index += 1;
//     }
//     return parseInt(arr.join(''));
// }
// console.log(solution(191, 4))
// console.log(solution(285, 20))


// function solution(D, X) {
//     let days = 0;
//     let curr = D[0];
//     let least = curr - X;
//     let max = curr + X;
//     for (let i = 1; i < D.length; i++) {
//         if (least <= D[i] && D[i] <= max) {
//             if (D[i] > curr) least = D[i] - X;
//             else if (D[i] < curr) max = D[i] + X;
//         } else {
//             curr = D[i];
//             least = curr - X;
//             max = curr + X;
//             days += 1;
//         }
//     }
//     return days+1;
// }
// console.log(solution([1, 12, 10, 4, 5, 2], 2))
// console.log(solution([2, 5, 9, 2, 1, 4], 4))

// function cmp(a, b) { return a - b; }

// function solution(A, B) {
//     if (!A.length || !B.length) return -1;
//     var n = A.length;
//     var m = B.length;
//     A.sort(cmp);
//     B.sort(cmp);
//     var i = 0;
//     for (var k = 0; k < n; k++) {
//         while (i < m - 1 && B[i] < A[k])
//             i += 1;
//         if (A[k] === B[i]) return A[k];
//     }
//     return -1;
// }
// console.log(solution([1, 3, 2, 1], [4, 2, 5, 3, 2]))
// console.log(solution([2, 2], []))


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


// var reorderList = function(head) {
//     let curr = head;
//     const arr = [];
//     while (curr) {
//         arr.push(curr.val);
//         curr = curr.next;
//     }
//     if (arr.length < 3) return head;
//     let left = 0;
//     let right = arr.length - 1;
//     curr = head;
//     while (curr) {
//         curr.val = arr[left];
//         left += 1;
//         curr = curr.next;
//         if (curr) {
//             curr.val = arr[right];
//             curr = curr.next;
//         }
//         right -= 1;
//     }
//     return head;
// };

// const counter = (node) => {
//     let count = 0;
//     while (node) {
//         count += 1;
//         node = node.next;
//     }
//     return count;
// }

// var removeNthFromEnd = function(head, n) {
//     if (!head || !head.next) return null;
//     let x = 1;
//     const position = counter(head) - n;
//     if (position < x) return head.next;
//     let curr = head;
//     let prev;
//     while (x <= position) {
//         prev = curr;
//         curr = curr.next;
//         x += 1;
//     }
//     prev.next = curr.next;
//     curr.next = null;
//     return head;
// };

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// const n1 = new ListNode(1);
// console.log(Object.getOwnPropertyDescriptors(n1))
// var hasCycle = function(head) {
//     console.log(head)
//     if (!head || !head.next) return false;
//     let memo = new Set();
//     let curr = head;
//     while (curr) {
//         if (memo.has(curr)) return true;
//         memo.add(curr);
//         curr = curr.next;
//     }
//     return false;
// };
// console.log(hasCycle(n1));


/**
 * Definition for a binary tree node.
 */
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
// const n7 = new TreeNode(9);
// const n6 = new TreeNode(6);
// const n5 = new TreeNode(3);
// const n4 = new TreeNode(1);
// const n3 = new TreeNode(7, n6, n7);
// const n2 = new TreeNode(2, n4, n5);
// const n1 = new TreeNode(4, n2, n3);
/*
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//  var invertTree = function(root) {
//     if (!root || (!root.left && !root.right)) return root;
//     const q = [root];
//     while (q.length) {
//         const curr = q.pop();
//         const new_right = curr.left;
//         curr.left = curr.right;
//         curr.right = new_right;
//         if (curr.right) q.push(curr.right);
//         if (curr.left) q.push(curr.left);
//     }
//     return root;
// };
// const recurseInvert = (node) => {
//     if (!node) return;
//     const new_right = node.left;
//     node.left = node.right;
//     node.right = new_right;
//     recurseInvert(node.left);
//     recurseInvert(node.right);
//     return;
// }
// console.log(invertTree(n1));


// var maxDepth = function(root, depth=0, max=0) {
//     if (!root) {
//         if (depth > max) max = depth;
//         return max;
//     };
//     depth += 1;
//     const left = maxDepth(root.left, depth, max);
//     const right = maxDepth(root.right, depth, max);
//     max = left > right ? left : right;
//     return max;
// };


// const diam_of_tree = (root) => {
//     if (!root) return 0;
//     let max_path = 0;
//     const search = (node) => {
//         if (!node) return 0;
//         const left = search(node.left);
//         const right = search(node.right);
//         max = Math.max(max_path, (left + right));
//         return Math.max(left, right0 + 1);
//     }
//     search(root);
//     return max_path;
// }


// var isSameTree = function(p, q) {
//     let truthy = true;
//     const checkTruth = (n1, n2) => {
//         if (n1 && n2 && n1.val !== n2.val) truthy = false;
//         else if ( (n1 && !n2) || (!n1 && n2) ) {
//             truthy = false
//             return truthy;
//         }
//         else if (!n1 && !n2) return truthy;
//         const left = checkTruth(n1.left, n2.left);
//         const right = checkTruth(n1.right, n2.right);
//         return left && right;
//     }
//     checkTruth(p, q);
//     return truthy;
// };


// var isBalanced = function(root) {
//     const checker = (n) => {
//         if (!n) return 0;
//         const left = checker(n.left);
//         const right = checker(n.right);
//         if (left < 0 || right < 0) return -1;
//         if ( Math.abs(left - right) > 1) return -1;
//         return left > right ? left + 1 : right + 1;
//     }
//     return checker(root) >= 0;
// };


// const checker = (n1, n2) => {
//     if (!n1 && !n2) return true;
//     if (!n1 || !n2 || n1.val !== n2.val) return false;
//     const l = checker(n1.left, n2.left);
//     const r = checker(n1.right, n2.right);
//     return l && r;
// }
// var isSubtree = function(root, subRoot) {
//     if (!root) return false;
//     if (checker(root, subRoot)) return true;
//     return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
// };


// var hammingWeight = function(n) {
//     let letters = n.toString(2).split('');
//     let count = 0;
//     for (let char of letters) {
//         if (char === '1') count += 1;
//     }
//     return count;
// };

// var countBits = function(n) {
//     const ans = [];
//     for (let i = 0; i <= n; i++) {
//         ans.push(hammingWeight(i));
//     }
//     return ans;
// };


// var reverseBits = function(n) {
//     const bitArr = n.toString(2).split('');
//     const newArr = [];
//     for (let i = bitArr.length - 1; i >= 0; i--) newArr.push(bitArr[i]);
//     let diff = 32 - bitArr.length;
//     while (diff > 0) {
//         newArr.push('0');
//         diff -= 1;
//     }
//     return parseInt(newArr.join(''), 2)
// };


// var missingNumber = function(nums) {
//     const max = nums.length;
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i <= max; i++) {
//         if (nums[i] !== i) return i;
//     }
// };


//


// var KthLargest = function(k, nums) {
//     this.k = (k ? k : null);
//     this.nums = nums.sort((a, b) => a - b);
// };
// KthLargest.prototype.add = function(val) {
//     this.nums.push(val);
//     this.nums.sort((a, b) => a - b);
//     // let unique = new Set();
//     // for (let el of this.nums) unique.add(el);
//     // console.log(unique.size - this.k)
//     // console.log(unique)
//     // return [...unique].sort()[unique.size - this.k]
//     console.log(this.nums)
//     return this.nums[this.nums.length - this.k];
// };
// const node = new KthLargest(3, [4, 5, 8, 2]);
// node.add(3)
// // console.log(node.add(3))
// node.add(5)
// // console.log(node.add(5))
// node.add(10)
// // console.log(node.add(10))
// console.log(node.add(9))
// console.log(node.add(4))



// var lastStoneWeight = function(stones) {
//     if (stones.length === 1) return stones[0];
//     stones.sort((a, b) => a - b);
//     while (stones.length > 1) {
//         let y = stones.pop();
//         let x = stones.pop();
//         if (x === y) continue;
//         else {
//             y -= x;
//             stones.push(y);
//             stones.sort((a, b) => a - b);
//         }
//     }
//     return stones.length === 0 ? 0 : stones[0];
// };
// console.log(lastStoneWeight([2, 2]))



// var kClosest = function(points, k) {
//     for (let point of points) point.push(Math.sqrt( (point[0]**2) + (point[1]**2) ));
//     points.sort((a, b) => a[2] - b[2]);
//     const closestPoints = [];
//     for (let i = 0; i < k; ++i) closestPoints.push([points[i][0], points[i][1]]);
//     return closestPoints;
// };



// var findKthLargest = function(nums, k) {
//     nums.sort((a, b) => a - b);
//     return nums[nums.length - k];
// };



// var leastInterval = function(tasks, n) {
//     const map = {};
//     let maxCount = 0;
//     let multiMaxes = 0;
//     for (let task of tasks) {
//         if (map[task]) map[task] += 1;
//         else map[task] = 1;
//         if (maxCount < map[task]) {
//             maxCount = map[task];
//             multiMaxes = 1;
//         } else if (maxCount === map[task]) multiMaxes += 1;
//     }
//     return Math.max(tasks.length, (maxCount - 1) * (n + 1) + multiMaxes);
// };



// var Twitter = function() {
//     this.follows = {};
//     this.tweets = [];

// };
// Twitter.prototype.postTweet = function(userId, tweetId) {
//     this.tweets.push([userId, tweetId]);
// };
// Twitter.prototype.getNewsFeed = function(userId) {
//     const filtered = this.tweets.filter(t => {
//         if (t[0] === userId || (this.follows[userId] && this.follows[userId][t[0]])                 ) {
//             return t;
//         }
//     })
//     const feed = [];
//     let j = 0;
//     for (let i = filtered.length - 1; i >= 0 && j < 10; --i, ++j) feed.push(filtered[i]);
//     return feed;
// };

// Twitter.prototype.follow = function(followerId, followeeId) {
//     if (!this.follows[followerId]) this.follows[followerId] = {};
//     this.follows[followerId][followeeId] = true;
// };
// Twitter.prototype.unfollow = function(followerId, followeeId) {
//     if (!this.follows[followerId]) return;
//     if (this.follows[followerId][followeeId]) delete this.follows[followerId][followeeId];
// };



// var Trie = function() {
//         this.root = {}
// };

// Trie.prototype.insert = function(word) {
//     let curr = this.root;
//     for (let char of word.split('')) {
//         if (!curr[char]) {
//             curr[char] = {};
//         }
//         curr = curr[char];
//     }
//     curr.isWord = true;
// };

// Trie.prototype.search = function(word) {
//     let curr = this.root;
//     for (let char of word.split('')) {
//         if (!curr[char]) {
//             return false;
//         }
//         curr = curr[char];
//     }
//     return curr.isWord ? true : false;
// };

// Trie.prototype.startsWith = function(prefix) {
//     let curr = this.root;
//     for (let char of prefix.split('')) {
//         if (!curr[char]) {
//             return false;
//         }
//         curr = curr[char];
//     }
//     return true;
// };



// var WordDictionary = function() {
//     this.root = {}
// };

// WordDictionary.prototype.addWord = function(word) {
//     let curr = this.root;
//     for (let char of word.split('')) {
//         if (!curr[char]) {
//             curr[char] = {};
//         }
//         curr = curr[char];
//     }
//     curr.isWord = true;
// };

// WordDictionary.prototype.search = function(word) {
//     let curr = this.root;
//     const chars = word.split('');
//     for (let i = 0; i < chars.length; ++i) {
//         let char = chars[i];
//         console.log(char)
//         if (char === '.') {
//             console.log(curr)
//             for (let key of Object.keys(curr)) {
//                 if (curr[key][chars[ i+1 ]]) char = key;
//             }
//         } else if (!curr[char]) {
//             return false;
//         }
//         curr = curr[char];
//         console.log(char)
//     }
//     console.log(curr)
//     return curr.isWord ? true : false;
// };
// const wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad")
// wordDictionary.addWord("dad")
// wordDictionary.addWord("mad")
// wordDictionary.search("pad")
// wordDictionary.search("bad")
// wordDictionary.search(".ad")
// wordDictionary.search("b..")



// var minCostClimbingStairs = function(cost, amount=0) {
//     if (!cost.length) return amount;
//     const ifLengthEOne = cost.length === 1 ? () => amount : () => minCostClimbingStairs(cost.slice(2), amount + cost[1]);
//     console.log(ifLengthEOne)
//     return Math.min( minCostClimbingStairs(cost.slice(1), amount + cost[0]), ifLengthEOne() );
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
// console.log(minCostClimbingStairs([10, 15, 20]))



// var rob = function(nums) {
//     if (nums.length === 1) return nums[0];
//     for (let i = 2; i < nums.length; ++i) {
//         let odd = nums[i - 3] || 0;
//         let even = i !== nums.length-1 ? nums[i - 2] : 0;
//         nums[i] += Math.max(odd, even);
//     }
//     return Math.max(nums[nums.length - 2] || 0, nums[nums.length - 1] || 0);
// };
// console.log(rob([2,1,1,2]))



// const palindromicTime = function(A){
//     const revNum = (num) => {
//         const tens = Number(num / 10);
//         const ones = Number(num % 10);
//         return (ones * 10) + tens;
//     }
//     let [hours, minutes] = A.split(':');
//     hours = parseInt(hours);
//     minutes = parseInt(minutes);
//     let palin = revNum(hours);
//     let timeNeed = 0;
//     if (minutes < palin) return hours - minutes;
//     while (minutes !== palin) {
//         if (minutes < palin) {
//             timeNeed += hours - minutes;
//             break;
//         }
//         timeNeed += (60 - minutes);
//         minutes = 0;
//         hours = hours === 23 ? 0 : hours + 1;
//         palin = revNum(hours);
//     }
//     console.log(palin)
//     console.log(hours)
//     console.log(minutes)
//     return timeNeed
// }



// var lowestCommonAncestor = function(root, p, q) {
//     const [min, max] = q.val > p.val ? [p, q] : [q, p];
//     if (root.val >= min.val && root.val <= max) return root;
//     if (root.val > max.val) return lowestCommonAncestor(root.left, p, q);
//     if (root.val < min.val) return lowestCommonAncestor(root.right, p, q);
// }


// const countNodes = (n, count=1) => {
//     if (!n) return count;
//     if (n.next) count += 1;
//     return countNodes(n.next, count);
// }
// var addTwoNumbers = function(l1, l2) {
//     let [shorter, longer] = countNodes(l1) > countNodes(l2) ? [l2, l1] : [l1, l2];
//     const root = longer;
//     while (shorter) {
//         longer.val += shorter.val;
//         shorter = shorter.next;
//         if (longer.val > 9) {
//             let diff = longer.val === 10 ? 1 : Math.floor(longer.val / 10);
//             console.log(longer.val)
//             console.log(diff)
//             longer.val = longer.val === 10 ? 0 : longer.val % 10;
//             if (shorter) shorter.val += diff;
//             else shorter = new ListNode(diff);
//         }
//         if (shorter && !longer.next) {
//             let node = new ListNode();
//             longer.next = node;
//         }
//         longer = longer.next;
//     }
//     return root;
// };



// var copyRandomList = function(head) {
//     const arr = [];
//     arr.length = countNodes(head) - 1;
//     let newHead = new Node(head.val, null, null);
//     arr.push(newHead);
//     let old = head;
//     let curr = newHead;
//     let index = 1;
//     while(old) {
//         if (old.next) {
//             arr[index] = arr[index] ? arr[index] : new Node(old.next.val, null, null);
//             if (!arr[index].val) arr[index].val = old.next.val
//             curr.next = arr[index];
//         }
//         if (old.random) {
//             arr[old.random] = arr[old.random] ? arr[old.random] : new Node(null, null, null);
//             curr.random = arr[old.random];
//         }
//         curr = curr.next;
//         old = old.next;
//     }
//     return newHead;
// };


// function collision(speed, pos) {
//     const target = speed[pos];
//     let collisions = 0;
//     for (let i = 0; i < speed.length; ++i) {
//         if (i < pos) {
//             if (speed[i] > target) collisions += 1;
//         }
//         if (i > pos) {
//             if (speed[i] < target) collisions += 1;
//         }
//     }
//     return collisions;
// }



// const mapArr = (array) => {
//     const map = {};
//     for (let i = 0; i < array.length; ++i) {
//         if (!map[array[i]]) map[array[i]] = 1;
//         else map[array[i]] += 1;
//     }
//     return map;
// }
// function getMinimumCost(arr) {
//     const mapper = mapArr(arr);

//     let i = 0;
//     const sums = [];
//     while (i < arr.length) {
//         sums.push(findSum(arr));
//         const shift = arr.shift();
//         arr.push(shift);
//         i += 1;
//     }
//     return Math.min(...sums);
// }



// function toolchanger(tools, startIndex, target) {
//     let j = startIndex - 1;
//     let iSteps = 1;
//     let jSteps = 1;
//     for (let i = startIndex + 1; i !== j; --j, ++i, ++jSteps, ++iSteps) {
//         if (i === tools.length) i = 0;
//         if (j === -1) j = tools.length - 1;
//         if (i < tools.length && tools[i] === target) return iSteps;
//         if (j >= 0 && tools[j] === target) return jSteps;
//     }
// }



// function minimumMoves(arr1, arr2) {
//     let moves = 0;
//     for (let i = 0; i < arr1.length; ++i) {
//         let el1 = String(arr1[i]).split('');
//         let el2 = String(arr2[i]).split('');
//         for (let j = 0; j < el1.length; ++j) {
//             moves += Math.abs(Number(el1[j]) - Number(el2[j]));
//         }
//     }
//     return moves;
// }



// const checkValidAndMove = (n, x, y, z, moveSet, q) => {
//     if ((x < n && x >= 0 && y < n && y >= 0) && !moveSet.has(String([x, y]))) {
//         q.unshift([x, y, z]);
//         moveSet.add(String([x, y]));
//     }
//     return;
// }
// function minMoves(n, startRow, startCol, endRow, endCol) {
//     let q = [[startRow, startCol, 0]];
//     const moveSet = new Set();
//     moveSet.add(String([startRow, startCol]));
//     while (q.length) {
//         let curr = q.pop();
//         if (curr[0] === endRow && curr[1] === endCol) return curr[2];
//         checkValidAndMove(n, curr[0] + 2, curr[1] + 1, curr[2] + 1, moveSet, q);
//         checkValidAndMove(n, curr[0] + 2, curr[1] - 1, curr[2] + 1, moveSet, q);
//         checkValidAndMove(n, curr[0] - 2, curr[1] + 1, curr[2] + 1, moveSet, q);
//         checkValidAndMove(n, curr[0] - 2, curr[1] - 1, curr[2] + 1, moveSet, q);
//         checkValidAndMove(n, curr[0] + 1, curr[1] + 2, curr[2] + 1, moveSet, q);
//         checkValidAndMove(n, curr[0] - 1, curr[1] + 2, curr[2] + 1, moveSet, q);
//         checkValidAndMove(n, curr[0] + 1, curr[1] - 2, curr[2] + 1, moveSet, q);
//         checkValidAndMove(n, curr[0] - 1, curr[1] - 2, curr[2] + 1, moveSet, q);
//     }
//     return -1;
// }



// var isHappy = function(n) {
//     const visited = new Set();
//     let curr = String(n);
//     while (!visited.has(curr)) {
//         if (Number(curr) === 1) return true;
//         visited.add(curr);
//         let arr = curr.split('');
//         let sum = 0;
//         for (let i = 0; i < arr.length; ++i) sum += (Number(arr[i])**2);
//         curr = String(sum);
//     }
//     return false;
// };



// function getUniqueCharacter(s) {
//     if (s.length < 2) return 1;
//     const sArr = s.split('');
//     let map = {};
//     let index = 1;
//     for (let char of sArr) {
//         if (!map[char]) {
//             map[char] = index;
//         } else map[char] = Infinity;
//         ++index;
//     }
//     map = Object.values(map).sort((a,b) => a - b)[0];
//     return map === Infinity ? -1 : map;
// }



// function chooseFlask(requirements, flaskTypes, markings) {
//     const q = new Array(flaskTypes);
//     for (let i = 0; i < q.length; ++i) q[i] = [];
//     for (let mark of markings) {
//         q[Number(mark[0])].push(mark[1]);
//     }
//     let bestFlask = [0, Infinity];
//     while (q.length) {
//         let curr = q.pop();
//         let x = 0;
//         let y = 0;
//         let waste;
//         while (x < requirements.length && y < curr.length) {
//             if (curr[y] < requirements[x]) {
//                 ++y;
//                 continue;
//             }
//             if (!waste) waste = 0;
//             waste += (curr[y] - requirements[x]);
//             ++x;
//         }
//         if (waste < bestFlask[1]) {
//             bestFlask = [flaskTypes-1, waste];
//         }
//         flaskTypes -= 1;
//     }
//     return bestFlask[1] === Infinity ? -1 : bestFlask[0];
// }



// function reachTheEnd(grid, maxTime) {
//     if (x === grid.length - 1 && y === grid[0].length - 1) return steps;
//     if (!memo[String(x, y)]) memo[String(x, y)] = true;
//     let up;
//     let down;
//     let left;
//     let right;
//     if (x > 0 && grid[x][y] === '.' && !memo[String(x-1, y)]) up = reachTheEnd(grid, maxTime, x-1, y, steps+1, memo);
//     if (x < grid.length - 1 && grid[x][y] === '.' && !memo[String(x+1, y)]) down = reachTheEnd(grid, maxTime, x+1, y, steps+1, memo);
//     if (y > 0 && grid[x][y] === '.' && !memo[String(x, y-1)]) left = reachTheEnd(grid, maxTime, x, y-1, steps+1, memo);
//     if (y < grid[0].length - 1 && grid[x][y] === '.' && !memo[String(x, y+1)]) right = reachTheEnd(grid, maxTime, x, y+1, steps+1, memo);
//     console.log(up, down, left, right)
//     return Math.min(up, down, left, right) <= maxTime ? 'Yes' : 'No';
// }



// function updateTimes(signalOne, signalTwo) {
//     const updates = [];
//     let x = 0;
//     while (x < signalOne.length && x < signalTwo.length) {
//         if (signalOne[x] === signalTwo[x]) {
//             if (!updates.length || signalOne[x] > updates[updates.length - 1]) {
//                 updates.push(signalOne[x]);
//             }
//         }
//         ++x;
//     }
//     return updates.length;
// }



// function traverse(grid, coords, memo, strokes) {
//     const q = [coords];
//     const target = grid[coords[0]][coords[1]];
//     while (q.length) {
//         const [r, c] = q.pop();
//         memo.add(r + '' + c);
//         if (r < grid.length - 1 && !memo.has((r+1) + '' + (c)) && grid[r+1][c] === target) {
//             q.push([r+1, c]);
//         }
//         if (r > 0 && !memo.has((r-1) + '' + (c)) && grid[r-1][c] === target) {
//             q.push([r-1, c]);
//         }
//         if (c < grid[0].length - 1 && !memo.has((r) + '' + (c+1)) && grid[r][c+1] === target) {
//             q.push([r, c+1]);
//         }
//         if (c > 0 && !memo.has((r) + '' + (c-1)) && grid[r][c-1] === target) {
//             q.push([r, c-1]);
//         }
//     }
//     return;
// }
// function strokesRequired(picture) {
//     for (let i = 0; i < picture.length; ++i) picture[i] = picture[i].split('');
//     const memo = new Set();
//     let strokes = 0;
//     let x = 0;
//     for (let y = 0; x < picture.length && y < picture[0].length; ++y) {
//         if (!memo.has(x + '' + y)) {
//             traverse(picture, [x, y], memo, strokes);
//             ++strokes;
//         }
//         if (y === picture[0].length - 1) {
//             y = -1;
//             ++x;
//         }
//     }
//     return strokes;
// }



// function breakSort(arr) {
//     if (arr.length < 2) return 0;
//     let ops = 0;
//     let prev = arr.pop();
//     while (arr.length) {
//         let curr = arr[arr.length - 1];
//         let a;
//         let b;
//         if (curr > prev) {
//             ++ops;
//             arr.pop();
//             if (curr % 2 === 0) {
//                 a = curr / 2;
//                 b = a;
//             } else {
//                 a = (curr - 1) / 2;
//                 b = a + 1;
//             }
//             if (b < prev) arr.push(a);
//             else arr.push(b, a)
//         } else {
//             prev = curr;
//             arr.pop();
//         }
//     }
//     return ops - 1;
// }



// function smashTheBricks(bigHits, newtons) {
//     if (bigHits >= newtons.length) return [[newtons.length], (newtons.map((el, i) => i + 1)), [-1]];
//     const indeces = {};
//     const solution = [[0], [], []];

//     for (let i = 0; i < newtons.length; ++i) {
//         indeces[newtons[i]] = i + 1;
//     }

//     newtons.sort((a, b) => a - b);

//     let bigHammers = bigHits;
//     for (let i = newtons.length - 1; bigHammers > 0; --i, --bigHammers) {
//         solution[1].push(indeces[newtons[i]]);
//     }

//     solution[0][0] += solution[1].length;

//     if (!solution[1].length) solution[1].push(-1);
//     else {
//         solution[1].sort((a, b) => a - b);
//         newtons = newtons.slice(0, (newtons.length - bigHits));
//     }

//     for (let i = 0; i < newtons.length; ++i) {
//         solution[0][0] += newtons[i];
//         solution[2].push(indeces[newtons[i]]);
//     }

//     if (!solution[2].length) solution[1].push(-1);
//     else solution[2].sort((a, b) => a - b);

//     return solution;
// }



// function findLongestSingleSlot(leaveTimes) {
//     const charCode = 97;
//     if (leaveTimes.length < 2) return String.fromCharCode(charCode + leaveTimes[0][0]);

//     let prevEndTime = 0;
//     let idAndLongestShift = leaveTimes[0];

//     for (let i = 0; i < leaveTimes.length; ++i) {
//         let currTime = leaveTimes[i][1] - prevEndTime;
//         if (currTime > idAndLongestShift[1]) {
//             idAndLongestShift = [leaveTimes[i][0], currTime]
//         }
//         prevEndTime = leaveTimes[i][1];
//     }

//     return String.fromCharCode(charCode + idAndLongestShift[0]);
// }



// function closestStraightCity(c, x, y, q) {
//     const cities = {};
//     for (let i = 0; i < c.length; ++i) {
//         cities[c[i]] = [x[i], y[i]];
//     }
//     const solution = [];
//     let curr;
//     for (let j = 0; j < q.length; ++j) {
//         let closest = [null, Infinity];
//         curr = cities[q[j]];

//         for (let i = 0; i < c.length; ++i) {
//             let distance;
//             if (x[i] === curr[0] && y[i] !== curr[1]) {
//                 distance = Math.abs(y[i] - curr[1]);
//             } else if (x[i] !== curr[0] && y[i] === curr[1]) {
//                 distance = Math.abs(x[i] - curr[0]);
//             }
//             if (distance < closest[1] || (distance === closest[1] && c[i].split('').length < closest[0].split('').length)) closest = [c[i], distance];
//         }
//         if (!closest[0]) solution.push('NONE');
//         else solution.push(closest[0]);
//     }
//     return solution;
// }



// function reductionCost(num) {
//     if (num.length === 2) return num[0] + num[1];
//     num.sort((a, b) => a - b);
//     let cost = 0;
//     while (num.length > 1) {
//         let prod = num.shift() + num.shift();
//         cost += prod;
//         num.push(prod);
//         num.sort((a, b) => a - b);
//     }
//     return cost;
// };
// console.log(reductionCost([1,2,3,4]))



// function checkMap(obj, val) {
//     const vals = Object.values(obj);
//     for (let v of vals) {
//         if (v === val) return true;
//     }
//     return false;
// };
// function degreeOfArray(arr) {
//     const map = {};
//     for (let num of arr) {
//         if (!map[num]) map[num] = 1;
//         else map[num] += 1;
//     }
//     const degree = Object.entries(map).sort((a, b) => b[1] - a[1])[0][1];
//     const keys = Object.keys(map);
//     for (let key of keys) if (map[key] < degree) delete map[key];
//     let i = 0;
//     let j = arr.length - 1;
//     while (true) {
//         let start = [i, j];
//         map[arr[i]] -= 1;
//         if (!checkMap(map, degree)) map[arr[i]] += 1;
//         else i += 1;
//         map[arr[j]] -= 1;
//         if (!checkMap(map, degree)) map[arr[j]] += 1;
//         else j -= 1;
//         if (i === start[0] && j === start[1]) break;
//     }
//     return (j - i) + 1;
// };
// console.log(degreeOfArray([1,2,2,3,1]))



// function findBestPath(n, m, max_t, beauty, u, v, t) {
//     const maxOneWay = Math.floor(max_t / 2);
//     const matrix = new Array();
//     for (let i = 0; i < n; ++i) matrix.push(new Array(n));

// }
// console.log(findBestPath(4,0,4))



// function rollTheString(s, roll) {
//     const arr = s.split('');
//     const increments = {};
//     for (let i = 0; i < roll.length; ++i) {
//         for (let j = 0; j < roll[i]; ++j) {
//             increments[j] = increments[j] ? increments[j] + 1 : 1;
//         }
//     }
//     for (let k = 0; k < arr.length; ++k) {
//         if (increments[k]) {
//             if (increments[k] > 26) increments[k] %= 26;
//             let newCode = arr[k].charCodeAt() + increments[k];
//             arr[k] = newCode <= 122 ? String.fromCharCode(newCode) : String.fromCharCode(newCode - 26);
//         }
//     }
//     return arr.join('');
// }
// console.log(rollTheString('abz', [3,2,1]))



// function getMergedIntervals(intervals) {
//     intervals.sort((a, b) => a[0] - b[0]);
//     const results = [];
//     let start = intervals[0][0];
//     let end = intervals[0][1];
//     for (let i = 0; i < intervals.length; ++i) {
//         let [s, e] = intervals[i];
//         if (s <= end) end = Math.max(end, e);
//         else {
//             results.push([start, end]);
//             start = s;
//             end = e;
//         }
//     }
//     results.push([start, end]);
//     return results;
// }
// console.log(getMergedIntervals([[7,7],[2,3],[6,11],[1,2]]))



// function largestCountValue(a) {
//     let count = 0;
//     let i = 0;
//     for (let j = 1; j < a.length; ++j) {
//         if (a[i] > a[j]) count += 1;
//         if (j === a.length - 1) {
//             i += 1
//             j = i;
//         }
//     }
//     return count;
// }
// function largestCountValue(a, count=0) {
//     if (a.length < 2) return a;
//     let l = a.length;
//     let mid = l % 2 === 0 ? l / 2 : Math.ceil(l / 2);
//     let left = largestCountValue(a.slice(0, mid+1), count);
//     let right = largestCountValue(a.slice(mid));
//     if (right[0] < left[left.length - 1]) count += 1;
//     return count;
// }
// console.log(largestCountValue([2,3,1]))


// function updateTimes(signalOne, signalTwo) {
//     const duration = signalOne.length < signalTwo.length ? signalOne.length : signalTwo.length;
//     let maxFreq = -Infinity;
//     let updates = 0;
//     for (let i = 0; i < duration; ++i) {
//         const s1 = signalOne[i];
//         if (s1 === signalTwo[i]) {
//             if (s1 > maxFreq) {
//                 maxFreq = s1;
//                 updates += 1;
//             }
//         }
//     }
//     return updates;
// }


// function word_pattern(pattern, s) {
//     s = s.split(' ');
//     if (pattern.length !== s.length) return false;
//     const pattern_val = {};
//     for (let i = 0; i < pattern.length; ++i) {
//         const word = s[i];
//         const key = pattern[i];
//         if (word.trim() === '') return false;
//         if (!pattern_val[key]) {
//             pattern_val[key] = word;
//         } else {
//             if (pattern_val[key] !== word) return false;
//         }
//     }
//     if ((Object.keys(pattern_val)).length !== (new Set(s)).size) return false;
//     return true;
// }


function can_jump(nums) {
    const l = nums.length - 1;
    for (let i = 0; i < l; ++i) {
        let index = i;
        while (index < l) {
            if (nums[index] === 0) break;
            index += nums[index];
        }
        if (index === l) return true;
    }
    return false;
}
