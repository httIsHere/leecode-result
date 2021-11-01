/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(nums.length === 1 && nums[0] === 0) return 1;
    let min_num = -1, max_num = 0, sum = 0, range_sum = 0;
    // 计算当前数字的和，记录最小值和最大值
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) min_num = nums[i];
        else if(nums[i] >= max_num) max_num = nums[i];
        sum += nums[i];
    }
    if(min_num === -1) return 0;
    // 计算理想数据范围的和
    range_sum = (1 + max_num) * max_num / 2;
    return range_sum - sum ? range_sum - sum : max_num + 1;
};
// @lc code=end