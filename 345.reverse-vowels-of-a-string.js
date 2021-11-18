/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let l = s.length,
    n = Math.floor(l / 2);
  let i = 0,
    j = l - i - 1;
  // & js字符串字符不能直接赋值
  s = s.split('');
  while (i < j) {
    let is_i = vowels.indexOf(s[i]) > -1,
      is_j = vowels.indexOf(s[j]) > -1;
    if (is_i && is_j) {
      let temp = s[j];
      s[j] = s[i];
      s[i] = temp;
      i++;
      j--;
    } else if (!is_i) {
      i++;
    } else if (!is_j) {
      j--;
    }
  }
  return s.join('');
};
// @lc code=end
