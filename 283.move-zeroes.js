/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length <= 1) return nums;
    let zero_num = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            // 覆盖0
            nums[zero_num] = nums[i];
            zero_num++;
        }
    }
    for(let i = zero_num; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
// @lc code=end
let nums = [0,1,0,3,12];
nums = [1, 9, 0, 8, 0, 0, 7, 12, 0];
moveZeroes(nums)

