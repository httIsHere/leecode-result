/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let times = {};

    for(let i = 0; i < nums.length; i++) {
        if(times[nums[i]] !== undefined) {
            // 之前出现过该数字，判断当前与之前出现的位置对比
            if(i -  times[nums[i]] <= k) {
                return true;
            }
        }
        // 更新当前位置
        times[nums[i]] = i;
    }
    return false;
};
// @lc code=end

let nums, k;
nums = [1,2,3,1], k = 3;
nums = [1,0,1,1], k = 1;
nums = [1,2,3,1,2,3], k = 2;
console.log(containsNearbyDuplicate(nums, k));