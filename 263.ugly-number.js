/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n <= 0) return false;
    // 只能被2，3和5整除

    // 除掉所有2
    while(n % 2 === 0) {
        n /= 2;
    }
    // 除掉所有3
    while(n % 3 === 0) {
        n /= 3;
    }
    // 除掉所有5
    while(n % 5 === 0) {
        n /= 5;
    }
    return n === 1;
};
// @lc code=end

let n = 1305744254;
console.log(isUgly(n))