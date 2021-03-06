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

// const reverseString = require('./top');

// test('takes a string and reverses it', () => {
//   expect(reverseString('hola')).toBe('aloh');
// });

// test("but it's a long string", () => {
//   expect(
//     reverseString(
//       'En un lugar de la mancha, de cuyo nombre no quiero acordarme...',
//     ),
//   ).toBe('...emradroca oreiuq on erbmon oyuc ed ,ahcnam al ed ragul nu nE');
// });

const calc = require('./top');

test('sums', () => {
  expect(calc('sum', 1, 2, 3, 4)).toBe(10);
});

test('subtract', () => {
  expect(calc('subtract', 1, 2, 3, 4)).toBe(-8);
});

test('multiply', () => {
  expect(calc('multiply', 1, 2, 3, 4)).toBe(24);
});

test('divide', () => {
  expect(calc('divide', 1, 2, 3, 4)).toBeCloseTo(0.04166667);
});

test('error when there is a non-integer', () => {
  expect(() => calc('sum', 'o', 0, 2, 'e')).toThrow();
  expect(() => calc('divide')).toThrow();
  expect(() => calc('multiply', 'r', '3', 4)).toThrow();
});

test('operation not found', () => {
  expect(() => calc('whatever', 1, 2, 3, 4)).toThrow();
});
