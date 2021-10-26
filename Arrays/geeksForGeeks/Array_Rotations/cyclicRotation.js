// Program to cyclically rotate an array by one
let rotateFun = (arr, n)=>{
    let last = arr[n-1];
    for(let i = N-1; i>1; i--){
        arr[i] = arr[i-1];
    }
    return arr;
} // time compleaxity => O(N) and Space Complexity => O(1)


let cyclicRotation = (arr, n)=>{
    let i = 0;
    let j = n-1;
    let temp;
    while(i < j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++
    }
    return arr;
}


let arry = [2,4,6,7,8,5,6];
console.log(rotateFun(arry, arry.length));
console.log(cyclicRotation(arry, arry.length));

