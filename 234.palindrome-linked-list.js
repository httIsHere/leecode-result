/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
//** 解法1：暴力解法，转成数组的回文判断 **//
var isPalindrome1 = function(head) {
    // 暴力，转成数组的回文判断
    if(!head.next) return true;
    let nums = [], len = 0;
    while(head) {
        nums.push(head.val);
        head = head.next;
        len++;
    }
    console.log(nums);
    for(let i = 0; i < len / 2; i++) {
        if(nums[i] !== nums[len - i - 1]) return false;
    }
    return true;
};
//** 解法2: 快慢指针 **//
var isPalindrome = function(head) {
    // q: 快指针移动2格，p: 慢指针移动1格
    // q的速度是p的两倍，所以q到达链表末尾时，p到达链表中间
    // 在p的移动过程中对前半段链表进行反转
    if(!head.next) return true;
    let q = head, p = head, pre = null;
    let flag = 1; // 链表奇偶
    while(q.next) {
        q = q.next;
        if(q.next) {
            // 再次移动1格
            q = q.next;
            pre = p.next;
            p.next = p.next.next; 
            pre.next = head;
            head = pre;
        } else {
            // 当前链表为偶数
            flag = 0;
        }
    }
    console.log(head)
    // 对比前半段和后半段
    // 尾指针指向链表后半截起始处
    q = p.next;
    // 如果是奇数，从头节点下一个开始比较
    p = flag ? head.next : head;
    while(q) {
        if(q.val !== p.val) return false;
        q = q.next;
        p = p.next;
    }
    return true;
};
// @lc code=end

let head;
head = {val: 1, next: {val: 2, next: {val: 2, next: {val: 1, next: null}}}}
head = {val: 1, next: {val: 2, next: null}}

console.log(isPalindrome(head))
