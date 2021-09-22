/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length, sum = m + n;
    let result = [],i = 0, j = 0, median_num = 0;
    if(!n) result = nums1;
    else {
        while(i < nums1.length) {
            if(nums2[j] === undefined && nums1[i] !== undefined) {
                result.push(nums1[i]);
                i++;
            } else if(nums1[i] <= nums2[j]) {
                result.push(nums1[i]);
                i++;
            } else if(j < nums2.length) {
                result.push(nums2[j]);
                j++;
            }
        }
        while(j < nums2.length) {
            result.push(nums2[j]);
            j++;
        }
    }
    if(sum % 2 === 0) {
        let me_1 = Math.floor(sum / 2);
        let me_2 = me_1 - 1;
        median_num = (result[me_1] + result[me_2]) / 2;
    } else {
        let me_1 = Math.floor(sum / 2);
        median_num = result[me_1];
    }
    return median_num;
};
// @lc code=end
// let nums1 = [1, 3], nums2 = [2];

// findMedianSortedArrays(nums1, nums2);

