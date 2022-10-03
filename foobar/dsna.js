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


var isIsomorphic = function(s, t) {

};
