// Move all zeroes to end of array

const moveAllZerosEnd = (arr) => {
  let count = 0;
    for(let i =0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }
    while(count < arr.length) {
        arr[count++] = 0
    }
  return arr;
};

let unOrder = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(moveAllZerosEnd(unOrder));
