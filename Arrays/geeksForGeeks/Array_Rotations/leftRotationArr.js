// Print left rotation of array in O(n) time and O(1) space

let printLeftRotation = (arr, n, k) => {
    for(let i=0; i<n; i++){
        console.log(arr[(i+k) % n] + " ");
    }
}

let arr = [3, 5, 6, 8, 11, 17];
printLeftRotation(arr, arr.length, 3);
printLeftRotation(arr, arr.length, 2);
printLeftRotation(arr, arr.length, 4);
printLeftRotation(arr, arr.length, 1);