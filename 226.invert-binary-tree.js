/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;

    return invertTree2(root);

    function invertTree2(root) {
        if(!root) return null;

        let left_tree = invertTree2(root.left);
        let right_tree = invertTree2(root.right);
        
        let _mid = left_tree;
        root.left = right_tree;
        root.right = _mid;
        return root;
    }
};
// @lc code=end

let root;
root = {
    val: 2,
    left: {val: 1, left: null, right: null},
    right: {val: 3, left: null, right: null}
}
let result = invertTree(root)
console.log(result);