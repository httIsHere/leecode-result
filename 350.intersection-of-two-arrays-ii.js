/*
 * @Author: your name
 * @Date: 2021-11-19 09:53:22
 * @LastEditTime: 2021-11-19 10:05:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/350.intersection-of-two-arrays-ii.js
 */
/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    for(let i in nums1) {
        for(let j in nums2) {
            if(nums1[i] === nums2[j]) {
                result.push(nums1[i]);
                nums2[j] = null; // 去除已被记录的数字
                break;
            }
        }
    }
    return result;
};
// @lc code=end
let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
nums1 = [1,2,2,1], nums2 = [2,2]

intersect(nums1, nums2)
