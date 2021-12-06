/*
 * @Author: your name
 * @Date: 2021-12-06 15:19:23
 * @LastEditTime: 2021-12-06 15:25:01
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/2006.count-number-of-pairs-with-absolute-difference-k.js
 */
/*
 * @lc app=leetcode id=2006 lang=javascript
 *
 * [2006] Count Number of Pairs With Absolute Difference K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let sum = 0, i = 0, j = 1;
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(Math.abs(nums[i] - nums[j]) === k) {
                sum++;
            }
        }
    }
    console.log(sum);
    return sum;  
};
// @lc code=end

let nums = [1,2,2,1], k = 1;

countKDifference(nums, k);
