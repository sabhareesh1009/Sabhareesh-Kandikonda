// Find element at given index after a number of rotations
// let rotateArray = (arr, start, end) => {
//     while (start < end) {
//         temp = arr[start];
//         arr[start] = arr[end];
//         arr[start] = temp;
//         start++;
//         end--;
//     }
//     return arr;
// }

// let findIndexArry = function (arr, n, first, second, ind) {
//     arr = rotateArray(arr, 0, first);
//     arr = rotateArray(arr, 0, second);
//     return arr[ind];
// }

let findIndexArry = function (arr, range, rotations, index) {
        for(let i = rotations - 1; i >= 0; i++){
            let left = range[0][i];
            let right = range[i][1];
            if(index >= left && index <= right) {
                if(left === right)
                    index = right
                else
                    index = index-1;
            }
        }
        return arr[index]
    }
    

let arr = [11, 34, 65, 8, 21, 112, 3, 12, 23, 5, 3]
console.log(findIndexArry(arr, arr.length, 3, 4, 5));



