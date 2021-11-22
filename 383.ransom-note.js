/*
 * @Author: your name
 * @Date: 2021-11-22 13:57:09
 * @LastEditTime: 2021-11-22 14:14:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/383.ransom-note.js
 */
/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // 收集ransomNote
    let ransomNote_arr = {}, flag = true;
    for(let i = 0; i < ransomNote.length; i++) {
        ransomNote_arr[ransomNote[i]] = ransomNote_arr[ransomNote[i]] ? ransomNote_arr[ransomNote[i]] + 1 : 1;
    }
    for(let i = 0; i < magazine.length; i++) {
        if(ransomNote_arr[magazine[i]]) {
            ransomNote_arr[magazine[i]]--;
        }
    }
    Object.keys(ransomNote_arr).forEach(c => {
        if(ransomNote_arr[c]) {
            flag = false;
            return;
        }
    });
    return flag;
};
// @lc code=end
let ransomNote = "a", magazine = "b";

canConstruct(ransomNote, magazine)
