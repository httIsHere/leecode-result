/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1) return true;
    let n = Math.floor(num / 2);
    for(let i = 1; i <= n; i++) {
        if(num === i * i) {
            return true;
        }
    }
    return false;
};
// @lc code=end

let num = 9;

console.log(isPerfectSquare(num));