const { test, expect } = require('@jest/globals');
const capitalize = require('./top');

test('capitalize string', () => {
  expect(capitalize('hola')).toBe('Hola');
});

test('there are spaces', () => {
  expect(capitalize('qué buen día hace')).toBe('Qué buen día hace');
});

test('only first letter is capitalized', () => {
  expect(capitalize('hOLa')).toBe('Hola');
});

test('there is a space at the start of string', () => {
  expect(capitalize(' hola')).toBe('Hola');
});
