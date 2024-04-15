// Divisible by 3 => Fizz
//   Divisible by 5 => Buzz
//    Otherwise, the number itself will be printed.
// Divisible by both 3 or 5 =  > FizzBuzz
// Not a number => 'Not a valid input'

const output = fizzbuzz(5);
console.log(`${output}`);

function fizzbuzz(input) {
  if (typeof input !== "number") return NaN;

  let result;
  if (input % 3 === 0 && input % 5 === 0) result = "FizzBuzz";
  else if (input % 3 === 0) result = "Fizz";
  else if (input % 5 === 0) result = "Buzz";
  else result = input;

  return result;
}
