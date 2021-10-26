let rotateArry = (arr, n, k) => {
    arr = reverseArr(arr, 0, n - 1);
    arr = reverseArr(arr, 0, k - 1);
    arr = reverseArr(arr, k, n - 1);
    return arr;
}
let reverseArr = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
let arr = [4, 6, 9, 12, 22, 4, 56, 6, 7, 8, 9]
console.log(rotateArry(arr, arr.length, 3));
