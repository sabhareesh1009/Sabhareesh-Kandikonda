// Given a sorted and rotated array, find if there is a pair with a given sum

let findSumInArr = function (arr, n, sum) {
    let i;
    for (i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            break
        }
    }
    let l = (i + 1) % n;
    let r = i;
    while (l != r) {
        if (arr[l] + arr[r] === sum) {
            return true
        } else if (arr[l] + arr[r] < sum) {
            l = l + 1 % n;
        } else if (arr[l] + arr[r] > sum) {
            r = (r + n - 1) % n;
        }
    }
    return false;
}

// Given a sorted and rotated array, count of pairs exits with a given sum


let findCountSumArr = (arr, n, sum) => {
    let i;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            break;
        }
    }
    let l = i + 1 % n;
    let r = i;
    let count = 0;
    while (l !== r) {
        if (arr[l] + arr[r] === sum) {
            count++;
            if (l === (r + n - 1) % n) {
                return count;
            }
            l = l + 1 % n;
            r = (r + n - 1) % n;
        } else if (arr[l] + arr[r] < sum) {
            l = l + 1 % n
        } else if (arr[l] + arr[r] > sum) {
            r = (r + n - 1) % n;
        }
    }
    return count;
}


let arr = [5, 8, 11, 1, 2, 3, 4];
findCountSumArr(arr, arr.length, 6);
findSumInArr(arr, arr.length, 8);