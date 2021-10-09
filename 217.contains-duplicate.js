/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let times = {};

    for(let i = 0; i < nums.length; i++) {
        if(times[nums[i]]) {
            return true;
        } else {
            times[nums[i]] = 1;
        }
    }
    return false;
};
// @lc code=end

let nums;
nums = [1,2,3,1];

console.log(containsDuplicate(nums))