/*
 * @Author: your name
 * @Date: 2021-11-19 11:07:17
 * @LastEditTime: 2021-11-19 11:20:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/374.guess-number-higher-or-lower.js
 */
/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let min = 1,
    max = n, mid;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    let res = guess(mid);
    if(res === -1) {
        max = mid - 1;
    } else if(res === 1) {
        min = mid + 1;
    } else if(res === 0) {
        return mid;
    }
    // switch (guess(mid)) {
    //   case -1:
    //     max = mid - 1;
    //     break;
    //   case 1:
    //     min = mid + 1;
    //     break;
    //   case 0:
    //     return mid;
    // }
  }
};
// @lc code=end
guessNumber(6)