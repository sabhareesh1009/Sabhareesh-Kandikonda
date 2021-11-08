// Rearrange array such that arr[i] >= arr[j] if i is even and arr[i]<=arr[j] if i is odd and j < i

function rearrangeEvenOddPos(arr) {
  const tempArr = new Array(arr.length);
  for (let index = 0; index < arr.length; index++) {
    tempArr[index] = arr[index];
  }
  tempArr.sort((a, b) => a - b);
  let evenpos = Math.floor(arr.length / 2);
  let oddpos = arr.length - evenpos;
  let j = oddpos - 1;
  for (let i = 0; i < arr.length; i += 2) {
    arr[i] = tempArr[j];
    j--;
  }
  j = oddpos;
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = tempArr[j];
    j++;
  }
  return arr;
}

const arr = [1, 23, 5, 56, 2, 3];
console.log(rearrangeEvenOddPos(arr));
