/*
 * Problem: 1. Two Sum
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=array
 * Language: javascript
 * Date: 2026-06-23
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(); // value -> index

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }
};
