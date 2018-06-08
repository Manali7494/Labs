// // Quadratic Time function for sum
// function arrayContainsSum(array, sum) {
//   for (let i = 0; // 1
//      i < array.length; // n + 1
//       i++) { // n
//     const element1 = array[i]; // n

//     for (let ii = 0; // 1
//          ii < array.length; // n + n^2
//           i++) { // n^2
//       const element2 = array[ii]; // n^2

//       if (element1 + element2 === sum)  // n^2
//       {
//         return true;
//       }
//     }
//   }
//   return false; // 2
// }
// // Running Time: 4n^2 + 5n + 4

// Requirement: expects array to be sorted
function arrayContainsSum(array, sum) {
  let i = 0; //1
  let ii = array.length - 1; // 1

  while (i <= ii) // n + 1
  {
    const element1 = array[i]; // n
    const element2 = array[ii]; //n 
    const currentSum = element1 + element2; // n

    if (currentSum === sum) { //n
      return true;
    } else if (currentSum > sum) { //n
      ii--;
    } else {
      i++;
    }
  }
  return false; // 2
}
// Running Time: 7n + 5
