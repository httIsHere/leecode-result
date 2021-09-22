/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) return s;
    // [0][1]肯定是一个回文
    // 如果 dp[l, r] = true 那么 dp[l + 1, r - 1] 也一定为 true
    let max_l = 1, max_i = 0, max_j = 0;
    let result = '', has_p = {};
    for (let r = 1; r < s.length; r++) {
        for(let l = 0; l < r; l++) {
            // 区间应该慢慢放大
            if(s[r] === s[l] && (r - l <= 2 || has_p[`${l+1}-${r-1}`])) {
                has_p[`${l}-${r}`] = true;
                if(r - l + 1 > max_l) {
                    max_l = r - l + 1;
                    max_i = l;
                    max_j = r;
                }
            }
        }
    }
    // console.log(max_i, max_j)
    for(let i = max_i; i <= max_j; i++) {
        result += s[i];
    }
    // console.log(result)
    return result;
};
// @lc code=end

// let s = "ccc";
// longestPalindrome(s)

// https://liweiwei1419.github.io/leetcode-solution-blog/leetcode-problemset/dynamic-programming/0005-longest-palindromic-substring.html#%E6%96%B9%E6%B3%95%E4%B8%89%EF%BC%9A%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%88%E6%8E%A8%E8%8D%90%EF%BC%89