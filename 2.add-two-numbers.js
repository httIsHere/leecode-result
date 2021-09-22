/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultNode = null, h_node = null;
    // --------------------------- main -------------------------------------
    let j_flag = 0;
    while(l1 || l2) {
        let _node = {val: 0, next: null};
        let l1_v = l1 ? l1.val : 0, l2_v = l2 ? l2.val : 0;
        _node.val = l1_v + l2_v + j_flag;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        j_flag = 0;
        if(resultNode) {
            if(_node.val >= 10) {
                _node = {val: _node.val % 10, next: null};
                j_flag = 1;
            }
            resultNode.next = _node;
        } else {
            // 首节点
            if(_node.val >= 10) {
                _node = {val: _node.val % 10, next: null};
                j_flag = 1;
            }
            resultNode = _node;
            h_node = resultNode; // 记录头指针
        }
        if(resultNode.next) {
            resultNode = resultNode.next;
        }
    }
    if(j_flag) {
        let __node = {val: 1, next: null};
        resultNode.next = __node;
    }
    return h_node;
    // ------------------------- main end -----------------------------------
};
// @lc code=end
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }


// let n1 = {val: 2, next: null}, n2 = {val: 4, next: null}, n3 = {val: 3, next: null}, n4 = {val: 5, next: null};
// let m1 = {val: 5, next: null}, m2 = {val: 6, next: null}, m3 = {val: 4, next: null};
// n1.next = n2, n2.next = n3, n3.next = n4;
// m1.next = m2, m2.next = m3;

// console.log(addTwoNumbers(n1, m1));