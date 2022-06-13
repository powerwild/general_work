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


const encode = (strs) => {
    let string = strs[0];
    for (let s of strs.slice(1)) {
        string += `<>${s}`;
    }
    return string;
}
const out = encode(["we", "say", ":", "yes"]);
console.log(out)
const decode = (str) => {
    return str.split('<>');
}
console.log(decode(out))
