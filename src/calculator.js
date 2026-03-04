/**
 * Node.js CLI Calculator
 *
 * Supports the following operations:
 *   - add      : Addition (a + b)
 *   - subtract : Subtraction (a - b)
 *   - multiply : Multiplication (a * b)
 *   - divide   : Division (a / b), with division-by-zero protection
 *   - modulo   : Modulo / remainder (a % b), with division-by-zero protection
 *   - power    : Exponentiation (a ^ b)
 *   - sqrt     : Square root (√a), with negative-number protection
 *
 * Usage:
 *   node calculator.js add 3 5
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 *   node calculator.js modulo 10 3
 *   node calculator.js power 2 8
 *   node calculator.js sqrt 16
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

// Modulo: returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Power: returns a raised to the exponent b
function power(a, b) {
  return Math.pow(a, b);
}

// Square root: returns the square root of a; throws if a is negative
function sqrt(a) {
  if (a < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(a);
}

// CLI entry point — only runs when executed directly, not when imported
if (require.main === module) {
  const [, , operation, rawA, rawB] = process.argv;

  if (!operation || rawA === undefined) {
    console.error('Usage: node calculator.js <operation> <a> [b]');
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = rawB !== undefined ? parseFloat(rawB) : undefined;

  if (isNaN(a) || (rawB !== undefined && isNaN(b))) {
    console.error('Error: Operands must be valid numbers.');
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
      case 'modulo':
        result = modulo(a, b);
        break;
      case 'power':
        result = power(a, b);
        break;
      case 'sqrt':
        result = sqrt(a);
        break;
      default:
        console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or sqrt.`);
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
} // end require.main === module

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };
