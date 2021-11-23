function anagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    const set = new Set(str1.split(''));
    for (let i = 0; i < str2.length; i++){
        if (!set.has(str2[i])) return false;
    }
    return true;
}


function commonElements(arr1, arr2) {
 let set = new Set(arr1);
 return arr2.filter(el => set.has(el));
}


function duplicate(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) return arr[i];
        set.add(arr[i]);
    }
}


function twoSum(nums, target) {
    let set = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        if (set.has(target - nums[i]) && nums[i] !== target / 2) return true;
    }
    return false;
}

function wordPattern(pattern, strings) {
    if (new Set(pattern.split('')).size !== new Set(strings).size) return false;
    for (let i = 0; i < strings.length - 1; i++) {
        if (pattern[i] === pattern[i + 1] && strings[i] !== strings[i + 1]) return false;
        if (pattern[i] !== pattern[i + 1] && strings[i] === strings[i + 1]) return false;
    }
    return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
