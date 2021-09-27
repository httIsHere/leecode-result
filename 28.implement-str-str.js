/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  let t_index = -1; // 目标索引
  let i = 0,
    j = 0,
    j_flag = false,
    is_find = false;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      j++;
      if (!j_flag) {
        j_flag = true;
        t_index = i;
      }
      if (j === needle.length) {
        is_find = true;
        break;
      }
      i++;
    } else {
      if (j_flag && t_index > -1) {
        i = t_index + 1;
      } else {
        i++;
      }
      j_flag = false;
      j = 0;
      t_index = -1;
    }
  }
  //   console.log(j)
  console.log(is_find ? t_index : -1);
  return is_find ? t_index : -1;
};
// @lc code=end
// let haystack = "hello", needle = "ll";
// let haystack = "aaaaa", needle = "bba";
// let haystack = "yyyysahfgsdhf", needle = "hfg";
let haystack = "mississippi",
  needle = "pi";
strStr(haystack, needle);
