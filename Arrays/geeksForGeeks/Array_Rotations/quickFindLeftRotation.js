//Quickly find multiple left rotations of an array | Set 1

let findQuickLeftRotation = function(arr, n, k){
    for(let i=k; i<n+k; i++){
        console.log(arr[i%n] + '');
        
    }
}

let arr = [3, 4, 6, 7, 8, 9];
findQuickLeftRotation(arr, arr.length, 3);