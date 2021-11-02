const numbers = process.argv.slice(2);
let delay = 0;


for (let i = 0; i < numbers.length; i++) {
  if (undefined || numbers[i] < 0 || isNaN(numbers[i])) {
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, numbers[i] * 1000);
  }
};


/*setTimeout(() => {
  process.stdout.write('\x07');
}, numbers * 1000)
*/