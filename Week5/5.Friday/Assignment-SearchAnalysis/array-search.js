// Linear Search
// function search(array, item) {
//   let index = null; // 1

//   for (let i = 0;   // 1
// i < array.length; // n + 1
// i++) { // n
//     if (item === array[i]) { // n
//       index = i; // only happens once, so not in worst case scenario
//       break;
//     }
//   }
//   return index; // 1
// }
// Run Time: 3n + 4

// Binary Search
function search(array, item) {
  let min = 0; // 1
  let max = array.length - 1; //1

  while (true) {
    const endIndex = min + max; // lg n
    const middleDecimal = endIndex / 2.0; // lgn
    const middleIndex = Math.floor(middleDecimal); // lgn

    const currentItem = array[middleIndex]; // lgn

    if (currentItem === item) { //lg n
      return middleIndex;
    } else if (currentItem < item) { // lg n 
      max = middleIndex + 1;
    } else { 
      min = middleIndex - 1; // lg n
    }

    if (min > max) { // lg n
      return null; // 2
    }
  }
}

// Running time of 9 log(n) + 4