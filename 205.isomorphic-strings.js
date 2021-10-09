/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s === t) return true;
    if(s.length !== t.length) return false;
    let hm1 = {}, hm2 = {}, hm_l = s.length;
    for(let i = 0; i < hm_l; i++) {
        // 当前唯一映射
        console.log(hm1[s[i]], hm2[t[i]])
        // 在两个字符串内s[i]对应的映射到t[i]
        // 所以在循环过程中映射位置也是相同的
        if(hm1[s[i]] != hm2[t[i]]) {
            console.log(hm1, hm2);
            return false;
        }
        // 记录当前的映射位置
        hm1[s[i]] = i + 1;
        hm2[t[i]] = i + 1;
    }
    return true;
};
// @lc code=end

// ** 思路 ** //
// 就是字符的一对一映射，不能出现一对多的映射
// 用两个 HashMap 分别来记录原字符串和目标字符串中字符出现情况
// 遍历原字符串，分别从源字符串和目标字符串取出一个字符，然后分别在两个数组中查找其值，若不相等，则返回 false，若相等，将其值更新为 i + 1

let s, t;
s = "egg", t = "add";
s = "bbbaaaba", t = "aaabbbba"
console.log(isIsomorphic(s, t))

