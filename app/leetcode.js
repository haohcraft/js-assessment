
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // Approach #1 (Brute Force) [Accepted]
 // Complexity: O(n^2)
var twoSum = function(nums, target) {
    var getRest = function(num) {return target - num;}
    //TODO: sort the array in the first place
    return nums.reduce(function(result, num, k) {
        var rest = getRest(num);
            var restNums = nums.slice(k + 1);
            var index = restNums.indexOf(rest);
            // Exist
            if(~index) {
                result = result.concat([k, index + 1 + k]);  
            }    
        return result;
    }, []);
    
};
// Approach #2 (Two-pass Hash Table) [Accepted]
// Idea: move form n x n to n + n
// Complexity: O(n)

var twoSum = function(nums, target) {
    var dict = nums.reduce(function(result, num, k) {
        result[num] = k;
        return result;
    }, {});

    return nums.reduce(function(result, num, k) {
        var temp = target - num;
        var index = dict[temp];
        // Does not exist
        if(index !== undefined && index !== k && !~result.indexOf(index)) {
            result = result.concat([k, index]);
        }
        return result;
    }, []);
}