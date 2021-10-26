// Program for array rotation
//N ==> length of array D ==> no of elements rotation

let arrayRotation = function(arry, N, D){
    let rotatedArr = [];
    for(let i=D; i<N; i++){   
        rotatedArr.push(arry[i]);
    }
    for(let i=0; i<D; i++){
        rotatedArr.push(arry[i]);
    }
    return rotatedArr;
}

let arry = [2,4,6,7,8,5,6];
console.log(arrayRotation(arry, arry.length, 4)); // time complexity O(N) and space complexity O(N)

/* Reversal algorithm for array rotation */

let reverseArray = function(arr, start, end){
    let temp = 0;
    while(start < end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

let arrayRotationReverse = function(arr, N, D) {
    if(D === 0) return;
    D = D % N;
    arr = reverseArray(arr, 0, D-1);
    arr = reverseArray(arr, D, N-1);
    arr = reverseArray(arr, 0 , N-1);
    return arr;
}
let arry = [2,4,6,7,8,5,6];
console.log(arrayRotationReverse(arry, arry.length, 4)); // time complexity O(N) and space complexity O(1)

/* Block swap algorithm for array rotation */

