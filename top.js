// function capitalize(string) {
//   let capString;
//   let trimmedString = string.trim();
//   capString = trimmedString.charAt(0).toUpperCase();
//   return capString.concat(trimmedString.slice(1).toLowerCase());
// }

// module.exports = capitalize;

// function reverseString(string) {
//   let reversedString = '';
//   for (let i = 0; i <= string.length; i++) {
//     reversedString = reversedString.concat(string.charAt(string.length - i));
//   }
//   return reversedString;
// }

// module.exports = reverseString;

function calc(operation, ...args) {
  if (args.some((arg) => typeof arg !== 'number')) {
    throw new Error('Please, enter only integers');
  }

  switch (operation) {
    case 'sum':
      return args.reduce((prev, actual) => prev + actual);
    case 'subtract':
      return args.reduce((prev, actual) => prev - actual);
    case 'multiply':
      return args.reduce((prev, actual) => prev * actual);
    case 'divide':
      return args.reduce((prev, actual) => prev / actual);

    default:
      throw new Error('Not such operation');
  }
}

module.exports = calc;
