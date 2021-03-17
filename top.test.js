const { test, expect } = require('@jest/globals');
// const capitalize = require('./top');

// test('capitalize string', () => {
//   expect(capitalize('hola')).toBe('Hola');
// });

// test('there are spaces', () => {
//   expect(capitalize('qué buen día hace')).toBe('Qué buen día hace');
// });

// test('only first letter is capitalized', () => {
//   expect(capitalize('hOLa')).toBe('Hola');
// });

// test('there is a space at the start of string', () => {
//   expect(capitalize(' hola')).toBe('Hola');
// });

const reverseString = require('./top');

test('takes a string and reverses it', () => {
  expect(reverseString('hola')).toBe('aloh');
});

test("but it's a long string", () => {
  expect(
    reverseString(
      'En un lugar de la mancha, de cuyo nombre no quiero acordarme...',
    ),
  ).toBe('...emradroca oreiuq on erbmon oyuc ed ,ahcnam al ed ragul nu nE');
});
