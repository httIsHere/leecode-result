/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let _head = head;
    while (_head) {
        let _next = _head.next;
        let flag = false;
        while(_next) {
            if(_next.val !== _head.val) {
                _head.next = _next;
                flag = true;
                break;
            }
            _next = _next.next;
        }
        console.log(flag);
        !flag && (_head.next = null);
        _head = _head.next;
    }
    console.log(head)
    return head;
};
// @lc code=end
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head;
let n3 = {val: 1, next: null}
let n2 = {val: 1, next: n3}
let n1 = {val: 1, next: n2}
head = n1;
deleteDuplicates(head)
