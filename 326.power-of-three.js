/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // 之前有个2次方的判断是：!(n & (n - 1))
    if(n <= 0) return false;
    // 对数
    let tem = Math.log10(n) / Math.log10(3);
    // 如果是整数
    return (tem - Math.floor(tem)) === 0
};
var isPowerOfThree_by_loop = function(n) {
    if(n <= 0) return false;

    while(n > 1) {
        if(n % 3 === 0) {
            n = n / 3;
        } else return false;
    }
    return true;
};
// @lc code=end

let n = 81

console.log(isPowerOfThree_by_loop(n))