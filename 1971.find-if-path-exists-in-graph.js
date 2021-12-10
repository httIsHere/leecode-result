/*
 * @Author: your name
 * @Date: 2021-12-10 14:30:25
 * @LastEditTime: 2021-12-10 17:32:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/1971.find-if-path-exists-in-graph.js
 */
/*
 * @lc app=leetcode id=1971 lang=javascript
 *
 * [1971] Find if Path Exists in Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    if(start === end) return true;
    let globals = {}, visited = {};
    // 收集各个顶点的边
    for(let i = 0; i < edges.length; i++) {
        let u = edges[i][0], v = edges[i][1];
        !globals[u] ? globals[u] = [v] : globals[u].push(v);
        !globals[v] ? globals[v] = [u] : globals[v].push(u);
    }
    // 从起点开始递归查询子顶点经过的路径
    dfs(start, visited);
    // 经过的点都被做上查询标记
    // 若终点无标记则说明从未被访问，即无路径抵达终点
    return visited[end] ? true : false;
    function dfs(vertex, visited) {
        // 已查询顶点标记
        if(visited[vertex]) return;
        visited[vertex] = true;
        for(let child of globals[vertex]) {
            dfs(child, visited);
        }
    }
};
// @lc code=end

let n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2;
n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], start = 0, end = 5;

validPath(n, edges, start, end);