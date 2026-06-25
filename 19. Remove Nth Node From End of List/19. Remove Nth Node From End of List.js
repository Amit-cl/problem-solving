/*
 * Problem: 19. Remove Nth Node From End of List
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Language: javascript
 * Date: 2026-06-25
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Move fast n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move both pointers
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove nth node from end
    slow.next = slow.next.next;

    return dummy.next;
};
