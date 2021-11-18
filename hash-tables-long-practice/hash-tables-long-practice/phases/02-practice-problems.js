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


}


function twoSum(nums, target) {

    // Fill this in

}


function wordPattern(pattern, strings) {

    // Fill this in

}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
