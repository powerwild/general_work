var runningSum = function(nums) {
    const results = [nums[0]];
    for (let i = 1; i < nums.length; ++i) {
        results.push(nums[i] + results[i-1])
    }
    return results;
};
