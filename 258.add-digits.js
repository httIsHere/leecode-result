/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits1 = function(num) {
    if(num < 10) return num;

    while(num >= 10) {
        let sum = 0, cur = num;
        while(cur >= 10) {
            sum += cur % 10;
            cur = Math.floor(cur / 10);
        }
        sum += cur;
        num = sum;
    }
    return num;
};

var addDigits = function(num) {
    // ! 38 = 3*10 + 8 = 3*9 + 3 + 8(各位相加为 3 + 8,即减小了9的3倍)
    // 每次都减少9的倍数
    return (num - 1) % 9 + 1;
}
// @lc code=end

let num = 10;

addDigits(num);