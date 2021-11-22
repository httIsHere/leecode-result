/*
 * @Author: your name
 * @Date: 2021-11-22 14:17:28
 * @LastEditTime: 2021-11-22 14:31:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/387.first-unique-character-in-a-string.js
 */
/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}, result = -1; // 用于收集字符

    for(let c of s) {
        obj[c] = obj[c] ? obj[c] + 1 : 1;
    }
    // 确定位置
    for(let i in s) {
        if(obj[s[i]] === 1) {
            result = i;
            break;
        }
    }
    return result;
};
// @lc code=end

let s = 'leetcode';
s = "loveleetcode"
s = "aabb"

console.log(firstUniqChar(s));