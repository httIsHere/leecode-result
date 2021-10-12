/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;
    // 就是n是否为2的指数
    while (Math.abs(n) > 1) {
        if(n % 2 === 0) {
            n = n / 2;
            console.log(n)
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end
let n;
n = -18;
console.log(isPowerOfTwo(n));
