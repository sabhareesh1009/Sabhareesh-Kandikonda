// Rearrange an array such that arr[i] = i

// const reArrange = (arr) => {
//   const numObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     numObj[arr[i]] = i;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (numObj[i]) {
//       arr[i] = i;
//     } else {
//       arr[i] = -1;
//     }
//   }
//   return arr;
// };

const reArrange = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] >= 0 && i !== arr[i]) {
          const num = arr[i];
          arr[i] = i;
          arr[num] = num
      } 
    }
    return arr;
  };

const arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];

console.log(reArrange(arr));
