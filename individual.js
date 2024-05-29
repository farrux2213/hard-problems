// const climbStairs = (n) => {
//   if (n === 1) return 1;

//   const dp = new Array(n + 1);
//   dp[1] = 1;
//   dp[2] = 2;

//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return de[n];
// };

// console.log(climbStairs(2));
let arr = [5, 10, 15];
let arr2 = arr;
arr[0] = 50;

console.log(arr2[0]); // ?
