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
