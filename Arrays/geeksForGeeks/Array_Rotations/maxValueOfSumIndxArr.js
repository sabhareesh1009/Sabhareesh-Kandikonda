// Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed
let findMaxRotSumArr = (arr, n) => {
    let arrSum = 0;
    let currArrySum = 0;
    for (let i = 0; i < n; i++) {
        arrSum += arr[i];
        currArrySum += i * arr[i];
    }
    let maxSum = currArrySum;
    for (let j = 1; j < n; j++) {
        currArrySum = currArrySum + arrSum - n * arr[n - j];
        if (currArrySum > maxSum) {
            maxSum = currArrySum;
        }
    }
    return maxSum;
}

let arr = [6, 7, 3, 11, 40, 20, 13, 4, 15];
console.log(findMaxRotSumArr(arr, arr.length));









//Following is the algorithm for this
/*Let us calculate initial value of i*arr[i] with no rotation
R0 = 0*arr[0] + 1*arr[1] +...+ (n-1)*arr[n-1]

After 1 rotation arr[n-1], becomes first element of array,
arr[0] becomes second element, arr[1] becomes third element
and so on.
R1 = 0*arr[n-1] + 1*arr[0] +...+ (n-1)*arr[n-2]

R1 - R0 = arr[0] + arr[1] + ... + arr[n-2] - (n-1)*arr[n-1]

After 2 rotations arr[n-2], becomes first element of array,
arr[n-1] becomes second element, arr[0] becomes third element
and so on.
R2 = 0*arr[n-2] + 1*arr[n-1] +...+ (n-1)*arr[n-3]

R2 - R1 = arr[0] + arr[1] + ... + arr[n-3] - (n-1)*arr[n-2] + arr[n-1]

If we take a closer look at above values, we can observe
below pattern

Rj - Rj-1 = arrSum - n * arr[n-j]

Where arrSum is sum of all array elements, i.e.,

arrSum = ∑ arr[i]
        0<=i<=n-1 */