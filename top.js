function capitalize(string) {
  let capString;
  let trimmedString = string.trim();
  capString = trimmedString.charAt(0).toUpperCase();
  return capString.concat(trimmedString.slice(1).toLowerCase());
}

module.exports = capitalize;
