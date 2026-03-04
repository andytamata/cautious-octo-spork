/**
 * Unit tests for calculator.js
 *
 * Covers the four basic arithmetic operations:
 *   - add      : Addition
 *   - subtract : Subtraction
 *   - multiply : Multiplication
 *   - divide   : Division (including division-by-zero edge case)
 */

const { add, subtract, multiply, divide } = require('../calculator');

// ── Addition ──────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds positive integers', () => expect(add(10, 20)).toBe(30));
  test('adds negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds a positive and a negative number', () => expect(add(10, -3)).toBe(7));
  test('adds decimals', () => expect(add(1.5, 2.5)).toBe(4));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
});

// ── Subtraction ───────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts positive integers', () => expect(subtract(20, 5)).toBe(15));
  test('subtracts resulting in a negative number', () => expect(subtract(3, 8)).toBe(-5));
  test('subtracts negative numbers', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracts decimals', () => expect(subtract(5.5, 2.5)).toBe(3));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
});

// ── Multiplication ────────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies positive integers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies a positive and a negative number', () => expect(multiply(5, -3)).toBe(-15));
  test('multiplies decimals', () => expect(multiply(2.5, 4)).toBe(10));
  test('multiplying by one returns the same number', () => expect(multiply(8, 1)).toBe(8));
});

// ── Division ──────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides positive integers', () => expect(divide(10, 2)).toBe(5));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBe(3.5));
  test('divides negative numbers', () => expect(divide(-12, -4)).toBe(3));
  test('divides a negative by a positive', () => expect(divide(-15, 3)).toBe(-5));
  test('divides zero by a number', () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
});
