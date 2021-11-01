/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// 一个二进制的数减1，就是将这个二进制最右边的那个1变成0
var countBits = function(n) {
    let count = 0, ans = [];
    for(let i = 0; i <= n; i++) {
        let j = i;
        while(j) {
            count++;
            j &= (j - 1);
        }
        ans.push(count);
        count = 0;
    }
    console.log(ans);
    return ans
};
// @lc code=end

countBits(5)