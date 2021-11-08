// Write a program to reverse an array or string
function reverseArrOrString(arr) {
    let i =0;
    let j = arr.length-1
    while(i!=j) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        j--;
        i++;
    }
    return arr;
}

const arr = [1, 2, 3];
console.log(reverseArrOrString(arr));