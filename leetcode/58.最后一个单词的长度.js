/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length < 1) {
        return 0
    }
    let array = s.split(' ');
    return array.reverse().find(p => p !== '')?.length ?? 0
};
// @lc code=end

