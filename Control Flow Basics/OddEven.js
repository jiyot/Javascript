showNumbers(10);

function showNumbers(limit) {
  for (let number = 0; number <= limit; number++) {
    // if (number % 2 === 0) {
    //   console.log(` ${number} : EVEN`);
    // } else {
    //   console.log(` ${number} : ODD`);
    // }

    const message = number % 2 === 0 ? "Even" : "Odd";
    console.log(`${number}: ${message}`);
  }
}
