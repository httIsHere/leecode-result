/*
 * @Author: your name
 * @Date: 2021-10-08 16:08:10
 * @LastEditTime: 2021-10-08 16:17:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/108.convert-sorted-array-to-binary-search-tree.js
 */
/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;

    return sortedArrayToBST2(0, nums.length - 1, nums);

    function sortedArrayToBST2(l, r, nums) {
        if(l > r) return null;
        // 以升序数组的中间元素作为根节点 root
        let mid = parseInt((l + r) / 2);
        let _node = {val: nums[mid], left: null, right: null};
        // 递归构建 root 的左子树与右子树
        _node.left = sortedArrayToBST2(l, mid - 1, nums);
        _node.right = sortedArrayToBST2(mid + 1, r, nums);
        return _node;
    }
};
// @lc code=end

let nums = [-10,-3,0,5,9];

console.log(sortedArrayToBST(nums))