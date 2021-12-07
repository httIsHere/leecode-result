/*
 * @lc app=leetcode id=1991 lang=javascript
 *
 * [1991] Find the Middle Index in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    if(nums.length <= 1) return 0;
    let mid_index = 0;
    while(mid_index < nums.length) {
        let l = 0, r = 0;
        for(let i = 0; i < nums.length; i++) {
            if(i < mid_index) l += nums[i];
            if(i > mid_index) r += nums[i];
        }
        if(l === r) {
            return mid_index;
        }
        mid_index++;
    }
    return -1;
};
// @lc code=end
let nums = [2,3,-1,8,4];
nums = [1,-1,4]
nums = [2,5]
findMiddleIndex(nums);
