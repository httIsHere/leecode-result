/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n <= 0) return false;

    while(n > 1) {
        if(n % 4 === 0) {
            n = n / 4;
        } else return false;
    }
    return true;
};
// @lc code=end

let n = 18;

console.log(isPowerOfFour(n));