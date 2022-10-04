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


var middleNode = function(head) {
    if (!head) return head;
    const arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }
    return arr[Math.floor(arr.length / 2)];
};
