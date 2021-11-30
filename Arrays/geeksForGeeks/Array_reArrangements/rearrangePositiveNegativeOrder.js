// Rearrange positive and negative numbers in O(n) time and O(1) extra space

const reArrangePosNeg = (arr) => {
  let temp = 0;
  let ind = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      temp = arr[ind];
      arr[ind] = arr[i];
      arr[i] = temp;
      ind++;
    }
  }

  let posInd = ind;
  let negInd = 0;
  while (negInd < posInd && posInd < arr.length && arr[negInd] < 0) {
    temp = arr[negInd];
    arr[negInd] = arr[posInd];
    arr[posInd] = temp;
    negInd = negInd + 2;
    posInd++;
  }
  return arr;
};

let reArr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
console.log(reArrangePosNeg(reArr));
