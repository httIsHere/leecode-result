/*
 * @Author: your name
 * @Date: 2021-12-07 09:40:21
 * @LastEditTime: 2021-12-07 11:33:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/1995.count-special-quadruplets.js
 */
/*
 * @lc app=leetcode id=1995 lang=javascript
 *
 * [1995] Count Special Quadruplets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  if (nums.length < 4) return 0;
  let sum = 0,
    len = nums.length;
  // 后面至少保留3位
  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      for (let k = j + 1; k < len - 1; k++) {
        let _sum = nums[i] + nums[j] + nums[k];
        let r = len - 1;
        while (k < r) {
          if (_sum === nums[r]) {
            sum++;
          }
          r--;
        }
      }
    }
  }
  return sum;
};
// @lc code=end

let nums = [1, 2, 3, 6];
nums = [1, 1, 1, 3, 5];
nums = [3, 3, 6, 4, 5];
countQuadruplets(nums);
