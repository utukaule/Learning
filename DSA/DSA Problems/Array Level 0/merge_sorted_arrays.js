// leetcode question number 88
// Merge sorted array
function merge_sort(nums1, m, nums2, n) {
  let num1Copy = nums1.splice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (num1Copy[p1] < nums2[p2]) {
      nums1[i] = num1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];
let m = nums1.length;
let n = nums2.length;

let result = merge_sort(nums1, m, nums2, n);
console.log(result);
