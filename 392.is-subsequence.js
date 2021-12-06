/*
 * @Author: your name
 * @Date: 2021-11-23 09:51:40
 * @LastEditTime: 2021-11-23 10:00:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/392.is-subsequence.js
 */
/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
        let _s = 0; // 指针
        for(let i = 0; i < t.length; i++) {
            if(s[_s] === t[i]) {
                _s++;
            }
        }
        return _s >= s.length;
};
// @lc code=end

let s = "abc", t = "ahbgdc"
s = "axc", t = "ahbgdc"

console.log(isSubsequence(s, t))