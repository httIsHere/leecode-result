/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;
    let s_r = null, t_r = null;
    
    s_r = getChars(s);
    t_r = getChars(t);

    if(Object.keys(s_r).length !== Object.keys(t_r).length) return false;

    let flag = true;

    Object.keys(s_r).forEach(key => {
        if(s_r[key] !== t_r[key]) {
            flag = false;
            return flag;
        }
    })

    return flag;

    function getChars(s) {
        let result = {};
        for (let i = 0; i < s.length; i++) {
            result[s[i]] ? result[s[i]]++ : (result[s[i]] = 1);
        }
        // console.log(result);
        return result;
    }
};
// @lc code=end
let s = "anagram", t = "nagaram";
s = "rat", t = "car";
console.log(isAnagram(s, t))
