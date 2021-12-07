/*
 * @Author: your name
 * @Date: 2021-12-07 15:18:02
 * @LastEditTime: 2021-12-07 15:50:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/1984.minimum-difference-between-highest-and-lowest-of-k-scores.js
 */
/*
 * @lc app=leetcode id=1984 lang=javascript
 *
 * [1984] Minimum Difference Between Highest and Lowest of K Scores
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(k <= 1) return 0;
    // select k students
    let diff = -1, len = nums.length;
    // 先排序, 不传参数，将不会按照数值大小排序，按照字符编码的顺序进行排序
    nums.sort(function(a,b){
        return a - b;
    });
    for(let i = 0; i + k <= len; i++) {
        let _diff = Math.abs(nums[i] - nums[i + k - 1]);
        diff = diff === -1 ? _diff : (diff < _diff ? diff : _diff);
    }
    return diff;
};
// @lc code=end

let nums = [9,4,1,7], k = 2
nums = [87063,61094,44530,21297,95857,93551,9918], k = 6
minimumDifference(nums, k)
