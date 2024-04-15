let num1 = 6;
let num2 = 3;
let number = max(num1, num2);
console.log(`the grater numbeer from ${num1} and ${num2} is: ${number}`);

function max(num1, num2) {
  //   if (num1 > num2) return num1;
  //     return num2;

  //Conditional (condition) ? a : b;
  return num1 > num2 ? num1 : num2;
}

let width = 35;
let height = 4;

console.log(`the picture is landscape: ${isLandscape(width, height)}`);
function isLandscape(width, height) {
  //   return (width > height) ? true : false;
  return width > height;
}
