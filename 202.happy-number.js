/*
 * @Author: your name
 * @Date: 2021-09-28 10:18:28
 * @LastEditTime: 2021-09-28 10:31:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/202.happy-number.js
 */
/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let set = [];

    while (n) {
        let sum = getSum(n);
        if(sum === 1) return true;
        // 这个和重复出现过，则陷入无限循环
        if(set.indexOf(sum) > -1) return false;
        set.push(sum);
        n = sum;
    }

    function getSum(n) {
        let sum = 0;
        while(n) {
            sum += (n % 10) * (n % 10);
            n = parseInt(n / 10);
        }
        return sum;
    }
};
// @lc code=end

isHappy(19)