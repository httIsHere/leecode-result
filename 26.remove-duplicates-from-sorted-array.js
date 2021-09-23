/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let j = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    console.log(j + 1, nums);
    return j + 1;
};
// @lc code=end
let nums = [1,1,2];
removeDuplicates(nums)
