/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const Index = nums.findIndex(p => p === val)
    if (Index < 0) {
        return nums.length
    }
    nums.splice(Index, 1)
    removeElement(nums, val)
};
// @lc code=end

