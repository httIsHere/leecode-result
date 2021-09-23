/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if(m <= 0) {
      for(let i = 0; i < n; i++) {
        nums1[i] = nums2[i];
      }
  } else if(n <= 0) {}
  else if(nums1[m - 1] <= nums2[0]) {
      for(let i = m; i < nums1.length; i++) {
          nums1[i] = nums2[i - m];
      }
  } else {
    let c_nums = JSON.parse(JSON.stringify(nums1));
    let i = 0, j = 0, insert_n = 0;
    while(j < n && i < m) {
      let _s = null;
      if(c_nums[i] <= nums2[j]) {
        _s = c_nums[i++];
      } else {
        _s = nums2[j++];
      }
      nums1[insert_n++] = _s;
    }
    console.log(nums1, i, j);
    if(i < m) {
      for(let t = i; t < m; t++) {
        nums1[t + j] = c_nums[t];
      }
    }
    if(j < n) {
      for(let t = j; t < n; t++) {
        nums1[t + i] = nums2[t];
      }
    }
  }
  // return nums1;
  console.log(nums1)
};
// @lc code=end
// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// let nums1 = [4,7,9,0,0,0], m = 3, nums2 = [5,7,8], n = 3;
// let nums1 = [0], m = 0, nums2 = [1], n = 1;
// let nums1 = [1], m = 1, nums2 = [], n = 0;
let nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3;
merge(nums1, m, nums2, n);