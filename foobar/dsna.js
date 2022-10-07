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


var reverse = function(x) {

};
