function printItems(arr) {
  if (Array.isArray(arr)) {
    arr.forEach((item, index) => {
      printItems(item);
    });
  } else {
    console.log(arr);
  }
}
// ----Another type of solution---- ///
// function printItems(array) {
//   array.forEach(item => {
//     if (Array.isArray(item)) {
//       // Print out all it's items individually
//       printItems(item);
//     } else {
//       console.log(item);
//     }
//   });
// }
const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);
