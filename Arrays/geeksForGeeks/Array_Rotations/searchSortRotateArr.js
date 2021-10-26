// Search an element in a sorted and rotated array

let searchFun = (arr, l, h, key) => {
    let mid = Math.floor(l+h/2);
    if(arr[mid] === key) return mid;
    if(arr[mid] >= arr[l]){
        if(key >= arr[l] && key <= arr[mid]){
            return searchFun(arr, l, mid-1, key)
        }
        return searchFun(arr, mid+1, h, key);
    }
    if( key >= arr[mid] && key <= arr[h]){
        return searchFun(arr, mid+1, h ,key);
    }
    return searchFun(arr, l , mid-1 , key);
}

let arr = [4, 5, 6, 1, 2, 3];
console.log(searchFun(arr, 0, arr.length, 6));