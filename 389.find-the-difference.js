/*
 * @Author: your name
 * @Date: 2021-11-23 09:24:26
 * @LastEditTime: 2021-11-23 09:27:20
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/389.find-the-difference.js
 */
/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let _target = {};
    for(let c of s) {
        _target[c] = _target[c] ? _target[c] + 1 : 1;
    }
    for(let c of t) {
        if(!_target[c]) return c;
        else _target[c]--;
    }
};
// @lc code=end

let s = "abcd", t = "abcde";
s = "a", t = "aa"

console.log(findTheDifference(s, t));
