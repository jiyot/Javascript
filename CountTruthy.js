// Falsy
// undefined
// null
// ''
//false
//0
//NaN

const array = [0, null, 2, 3, 5];
let count = 0;

function countTruthy(array) {
  for (const index of array) {
    // if (Boolean(array[index])) {
    if (index) {
      //   console.log("truthy:", array[index]);
      count += 1;
    } else {
      //   console.log("falsy:", array[index]);
    }
  }
  console.log(count);
}

countTruthy(array);
