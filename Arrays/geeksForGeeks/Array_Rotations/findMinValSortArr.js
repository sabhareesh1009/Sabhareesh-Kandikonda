// Find the minimum element in a sorted and rotated array

findMinSortedArr = function (arr, n) {
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return (arr[i + 1 % n]);
        }
    }
    return 0;
}
let arr = [11, 12, 14, 6, 8, 10];
console.log(findMinSortedArr(arr, arr.length))