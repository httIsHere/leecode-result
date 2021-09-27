/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    let step_1 = 1, step_2 = 2;
    for(let i = 3; i <= n; i++) {
        let p = step_1 + step_2;
        step_1 = step_2;
        step_2 = p;
    }
    console.log(step_2);
    return step_2;
};
// @lc code=end

// 动态规划
// 最后只能1/2，所以 f ( i ) = f ( i − 2 ) + f ( i − 1 )

climbStairs(4)