/*
 * @Author: your name
 * @Date: 2021-12-06 14:42:20
 * @LastEditTime: 2021-12-06 14:44:23
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/2011.final-value-of-variable-after-performing-operations.js
 */
/*
 * @lc app=leetcode id=2011 lang=javascript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    // 不管是X--，--X还是X++，++X，只要判断中间字符的符号
    let x = 0;
    operations.forEach(item => {
        if(item[1] === '+') {
            x++;
        } else if(item[1] === '-') {
            x--;
        }
    });
    console.log(x)
    return x;
};
// @lc code=end

let operations = ["++X","++X","X++"]

finalValueAfterOperations(operations)