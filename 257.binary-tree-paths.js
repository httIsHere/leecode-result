/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

    let result = [], path = '';

    binaryTreePath(root, path);

    return result;
    
    function binaryTreePath(root, path) {
        // path: 父节点的路径
        if(!root) return null;
        if(!root.left && !root.right) {
            // ^ It's a leaf
            path += root.val;
            result.push(path);
            return;
        }
        path += `${root.val}->`; // 记录当前节点
        binaryTreePath(root.left, path);
        binaryTreePath(root.right, path);
    }
};
// @lc code=end

let root;
let node5 = {val: 5, left: null, right: null},
    node2 = {val: 2, left: null, right: node5},
    node3 = {val: 3, left: null, right: null};
root = {val: 1, left: node2, right: node3}

binaryTreePaths(root);