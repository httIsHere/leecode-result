/*
 * @Author: your name
 * @Date: 2021-11-18 14:30:22
 * @LastEditTime: 2021-11-18 14:45:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/349.intersection-of-two-arrays.js
 */
/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersection_arr = new Set(), result = [];
    let set1 = new Set(nums1), set2 = new Set(nums2);
    set1.forEach(n1 => {
        set2.forEach(n2 => {
            if(n1 === n2) {
                intersection_arr.add(n1);
            }
        })
    })
    intersection_arr.forEach(n => {
        result.push(n)
    })
    return result;
};
// @lc code=end

let nums1 = [1,2,2,1], nums2 = [2,2];
nums1 = [4,9,5], nums2 = [9,4,9,8,4]
intersection(nums1, nums2)