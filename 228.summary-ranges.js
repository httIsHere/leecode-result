/*
 * @Author: your name
 * @Date: 2021-10-11 14:49:28
 * @LastEditTime: 2021-10-11 15:07:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/228.summary-ranges.js
 */
/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length === 0) return [];
    let result = [], is_continuous = false, _range = nums[0].toString();
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] === 1) {
            // 为连续的数字
            if(!is_continuous) {
                _range += '->';
                is_continuous = true;
            } 
        } else if(is_continuous) {
            // 中断连续
            _range += nums[i - 1];
            result.push(_range)
            _range = nums[i].toString();
            is_continuous = false;
        } else if(!is_continuous) {
            result.push(_range);
            _range = nums[i].toString();
        }
    }
    if(_range) {
        is_continuous && (_range += nums[nums.length - 1]);
        result.push(_range);
    }
    console.log(result)
    return result;
};
// @lc code=end

let nums;
nums = [0,1,2,4,5,7];
nums = [0,2,3,4,6,8,9];
nums = [-1];
summaryRanges(nums)