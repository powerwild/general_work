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
    if (s.length !== t.length) return false;
    const sArr = s.split('');
    const tArr = t.split('');
    const sMap = {};
    const tMap = {};
    for (let i = 0; i < sArr.length; ++i) {
        if (!sMap[sArr[i]]) sMap[sArr[i]] = '' + i;
        else sMap[sArr[i]] += i;

        if (!tMap[tArr[i]]) tMap[tArr[i]] = '' + i;
        else tMap[tArr[i]] += i;
    }
    for (let j = 0; j < sArr.length; ++j) {
        if (sMap[sArr[j]] !== tMap[tArr[j]]) return false;
    }
    return true;
};

