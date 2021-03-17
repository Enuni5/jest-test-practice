// function capitalize(string) {
//   let capString;
//   let trimmedString = string.trim();
//   capString = trimmedString.charAt(0).toUpperCase();
//   return capString.concat(trimmedString.slice(1).toLowerCase());
// }

// module.exports = capitalize;

function reverseString(string) {
  let reversedString = '';
  for (let i = 0; i <= string.length; i++) {
    reversedString = reversedString.concat(string.charAt(string.length - i));
  }
  return reversedString;
}

module.exports = reverseString;
