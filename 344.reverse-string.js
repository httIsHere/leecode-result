/*
 * @Author: your name
 * @Date: 2021-11-17 15:41:09
 * @LastEditTime: 2021-11-17 15:47:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/344.reverse-string.js
 */
/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = Math.floor(s.length / 2), l = s.length;
    for(let i = 0; i < n; i++) {
        let temp = s[i];
        s[i] = s[l - i - 1];
        s[l - i - 1] = temp;
    }
};
// @lc code=end

let s = ["h","e","l","l","o"];
reverseString(s);