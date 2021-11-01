/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // 和之前的字符映射类似
    let tep = {}, flag = true;
    let _s = s.split(' ');
    if(pattern.length !== _s.length) return false;
    for(let i = 0; i < pattern.length; i++) {
        if(!tep[pattern[i]]) tep[pattern[i]] = _s[i];
        else if(tep[pattern[i]] !== _s[i]) return false;
        // 检查是否存在映射关系
        Object.keys(tep).forEach(item => {
            if(tep[item] === _s[i] && item !== pattern[i]) {
                flag = false;
                return;
            }
        });
        if(!flag) return false;
    }
    return true;
};
// @lc code=end
let pattern = "abba", s = "dog cat cat dog";
// pattern = "abba", s = "dog dog dog dog"
pattern = "abba", s = "dog cat cat fish"

console.log(wordPattern(pattern, s))
