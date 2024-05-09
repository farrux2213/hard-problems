// function findMedianSortedArrays(nums1, nums2) {
//   const m = nums1.length;
//   const n = nums2.length;
//   if (m > n) {
//     // Ensure nums1 is the shorter array
//     return findMedianSortedArrays(nums2, nums1);
//   }

//   let low = 0;
//   let high = m;
//   while (low <= high) {
//     const i = Math.floor((low + high) / 2);
//     const j = Math.floor((m + n + 1) / 2 - i);

//     if (i < m && nums2[j - 1] > nums1[i]) {
//       low = i + 1;
//     } else if (i > 0 && nums1[i - 1] > nums2[j]) {
//       high = i - 1;
//     } else {
//       const maxLeft = Math.max(
//         nums1[i - 1] === undefined ? -Infinity : nums1[i - 1],
//         nums2[j - 1] === undefined ? -Infinity : nums2[j - 1]
//       );
//       if ((m + n) % 2 === 1) {
//         return maxLeft;
//       }

//       const minRight = Math.min(
//         nums1[i] === undefined ? Infinity : nums1[i],
//         nums2[j] === undefined ? Infinity : nums2[j]
//       );
//       return (maxLeft + minRight) / 2;
//     }
//   }
//   return 0;
// }
// // Example 1
// console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2

// // Example 2
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5

//=====================================================================================
// function convert(s, numRows) {
//   if (numRows === 1) return s;

//   let rows = Array(numRows).fill("");
//   let index = 0;
//   let step = 1;

//   for (let i = 0; i < s.length; i++) {
//     rows[index] += s[i];

//     if (index === 0) {
//       step = 1;
//     } else if (index === numRows - 1) {
//       step = -1;
//     }

//     index += step;
//   }

//   return rows.join("");
// }

// // Test cases
// console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
// console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
// console.log(convert("A", 1)); // Output: "A"

//====================================================

// var reverse = function (x) {
//   const reversed =
//     parseInt(Math.abs(x).toString().split("").reverse().join("")) *
//     Math.sign(x);
//   return reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1
//     ? 0
//     : reversed;
// };
// const letterCombinations = function (digits) {
//   if (digits.length === 0) return [];

//   const phoneMap = {
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };

//   const combinations = [];

//   const generateCombinations = (current, nextDigits) => {
//     if (nextDigits.length === 0) {
//       combinations.push(current);
//       return;
//     }

//     const currentDigit = nextDigits.substring(0, 1);
//     const letters = phoneMap[currentDigit];
//     for (let i = 0; i < letters.length; i++) {
//       generateCombinations(current + letters[i], nextDigits.substring(1));
//     }
//     console.log(nextDigits.substring(1));
//   };

//   generateCombinations("", digits);
//   return combinations;
// };

// // Example usage:
// console.log(letterCombinations("23")); // Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

//======================================================================================
// function intToRoman(num) {
//   const romanMap = [
//     { value: 1000, symbol: "M" },
//     { value: 900, symbol: "CM" },
//     { value: 500, symbol: "D" },
//     { value: 400, symbol: "CD" },
//     { value: 100, symbol: "C" },
//     { value: 90, symbol: "XC" },
//     { value: 50, symbol: "L" },
//     { value: 40, symbol: "XL" },
//     { value: 10, symbol: "X" },
//     { value: 9, symbol: "IX" },
//     { value: 5, symbol: "V" },
//     { value: 4, symbol: "IV" },
//     { value: 1, symbol: "I" },
//   ];

//   let result = "";

//   for (let i = 0; i < romanMap.length; i++) {
//     while (num >= romanMap[i].value) {
//       result += romanMap[i].symbol;
//       num -= romanMap[i].value;
//     }
//   }

//   return result;
// }

// // Test cases
// console.log(intToRoman(3749)); // Output: "MMMDCCXLIX"
// console.log(intToRoman(58)); // Output: "LVIII"
// console.log(intToRoman(1994)); // Output: "MCMXCIV"

// ===================================================================================

// function climbStairs(n) {
//   if (n === 1) return 1;

//   let dp = new Array(n + 1);
//   dp[1] = 1;
//   dp[2] = 2;

//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[n];
// }

// // Test cases
// console.log(climbStairs(2)); // Output: 2
// console.log(climbStairs(3)); // Output: 3
// console.log(climbStairs(4)); // Output: 5

/* 

1+1+1+1
1+1+2
2+2
2+1+1
1+2+1

*/
//=======================================================================================
// var getSkyline = function (buildings) {
//   const n = buildings.length;
//   if (n === 0) return [];
//   if (n === 1) {
//     const [left, right, height] = buildings[0];
//     return [
//       [left, height],
//       [right, 0],
//     ];
//   }

//   const merge = (left, right) => {
//     const merged = [];
//     let h1 = 0,
//       h2 = 0;
//     while (left.length && right.length) {
//       let x;
//       let h;
//       if (left[0][0] < right[0][0]) {
//         [x, h1] = left.shift();
//       } else if (left[0][0] > right[0][0]) {
//         [x, h2] = right.shift();
//       } else {
//         x = left[0][0];
//         h1 = left.shift()[1];
//         h2 = right.shift()[1];
//       }
//       const maxHeight = Math.max(h1, h2);
//       if (merged.length === 0 || maxHeight !== merged[merged.length - 1][1]) {
//         merged.push([x, maxHeight]);
//       }
//     }
//     merged.push(...left, ...right);
//     return merged;
//   };

//   const divideAndConquer = (buildings, left, right) => {
//     if (left === right) {
//       const [l, r, h] = buildings[left];
//       return [
//         [l, h],
//         [r, 0],
//       ];
//     }
//     const mid = Math.floor((left + right) / 2);
//     const leftSkyline = divideAndConquer(buildings, left, mid);
//     const rightSkyline = divideAndConquer(buildings, mid + 1, right);
//     return merge(leftSkyline, rightSkyline);
//   };

//   return divideAndConquer(buildings, 0, n - 1);
// };
