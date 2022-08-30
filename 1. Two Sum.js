/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
