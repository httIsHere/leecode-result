/*
 * @Author: your name
 * @Date: 2021-12-10 14:03:23
 * @LastEditTime: 2021-12-10 14:08:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/1979.find-greatest-common-divisor-of-array.js
 */
/*
 * @lc app=leetcode id=1979 lang=javascript
 *
 * [1979] Find Greatest Common Divisor of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = nums[0], max = nums[0], gcd = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i];
        } else if(nums[i] > max) {
            max = nums[i];
        }
    }
    for(let i = 1; i <= min && i <= max; i++) {
        if(min % i === 0 && max % i === 0) {
            gcd = i;
        }
    }
    return gcd;
};
// @lc code=end

let nums = [2,5,6,9,10]
nums = [7,5,6,8,3]
nums = [3,3]
findGCD(nums);