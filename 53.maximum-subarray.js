/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    let max_sum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        // 此时nums[i - 1]就表示之前的子序和
        // 表示保留之前的子序和
        if(nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        // 如果nums[i] + nums[i - 1]变小了表示之前的子序和被剔除
        // 重新开始计算子序和
        if(nums[i] > max_sum) max_sum = nums[i];
    }
    console.log(max_sum);
    return max_sum;
};
// @lc code=end
let nums;
nums = [-2,1,-3,4,-1,2,1,-5,4]; // [4,-1,2,1] 
nums = [5,4,-1,7,8];
// nums = [-2,-1];
// nums = [-5, 2, 3, -1, 7, -5];
// nums = [8,-19,5,-4,20];
// nums = [1,2,-1,-2,2,1,-2,1,4,-5,4]; // [2, 1, -2, 1, 4]
maxSubArray(nums);
