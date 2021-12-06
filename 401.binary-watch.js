/*
 * @Author: your name
 * @Date: 2021-11-23 10:15:53
 * @LastEditTime: 2021-11-23 10:42:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/401.binary-watch.js
 */
/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    // 排列组合？
    if(turnedOn <= 0 || turnedOn > 8) return [];
    let result = new Set(); // 去除重复结果
    let minutes = [32, 16, 8, 4, 1];
    // hour
    for(let i = 0; i <= turnedOn; i++) {
        let remain = turnedOn - i; // 剩余
        if(remain === 0) {
            result.add(`${i}:00`);
            break;
        }
        // 将剩余的在分钟上进行排列组合
        if(remain >= 6) break; // 分钟上不可能同时点亮
        // 在minuts内取出remain个进行排列组合
        let item = `${i}:`;
        permutate(remain, 0, 0, [], item);
        console.log(result)
    }
    console.log(result)

    function permutate(num, sum, index, prefix, item) {
        if(!num) return;
        for(let i = index; i < num; i++) {
            sum += minutes[i];
            prefix.push(minutes[i]);
            if(prefix.length === num) {
                item += `${sum >= 10 ? sum : '0' + sum}`;
                result.add(item);
            } else {
                permutate(num, sum, index++, prefix, item);
            }
        }
    }
};
// @lc code=end

let turnedOn = 1;

readBinaryWatch(turnedOn)