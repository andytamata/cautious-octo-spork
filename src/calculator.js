/**
 * Node.js CLI Calculator
 *
 * Supports the following basic arithmetic operations:
 *   - add      : Addition (a + b)
 *   - subtract : Subtraction (a - b)
 *   - multiply : Multiplication (a * b)
 *   - divide   : Division (a / b), with division-by-zero protection
 *
 * Usage:
 *   node calculator.js add 3 5
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b; throws if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// CLI entry point — only runs when executed directly, not when imported
if (require.main === module) {
const [, , operation, rawA, rawB] = process.argv;

if (!operation || rawA === undefined || rawB === undefined) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide> <a> <b>');
  process.exit(1);
}

const a = parseFloat(rawA);
const b = parseFloat(rawB);

if (isNaN(a) || isNaN(b)) {
  console.error('Error: Both operands must be valid numbers.');
  process.exit(1);
}

try {
  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    default:
      console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
      process.exit(1);
  }
  console.log(result);
} catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
} // end require.main === module

module.exports = { add, subtract, multiply, divide };
