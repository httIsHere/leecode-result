/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    let _head = head, is_head = true;
    while(head) {
        // 头节点
        if(is_head) {
            if(head.val === val) {
                _head = head.next; // 指向头节点
                head = head.next;
            } else {
                is_head = false;
            }
        } else {
            let _next = head.next;
            // console.log(JSON.stringify(_next))
            while (_next) {
                if(_next.val === val) {
                    head.next = _next.next;
                    _next = _next.next;
                } else {
                    break;
                }
            }
            head = head.next;
            // console.log(JSON.stringify(head))
        }
    }
    console.log(JSON.stringify(_head));

    return _head;
};
// @lc code=end
let head = null;
let n7 = {val: 6, next: null}
let n6 = {val: 5, next: n7};
let n5 = {val: 4, next: n6}
let n4 = {val: 3, next: n5}
let n3 = {val: 6, next: n4}
let n2 = {val: 2, next: n3}
head = {val: 1, next: n2}

// head = {val: 1, next: {val: 2, next: {val: 2, next: {val: 1, next: null}}}}

removeElements(head, 2)

