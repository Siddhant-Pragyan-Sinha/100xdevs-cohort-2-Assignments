/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs
  Once you've implemented the logic, test your code by running
*/
class Calculator {
  // Define the private result field
  #result;

  constructor() {
    // Initialize the private result field to 0
    this.#result = 0;
  }

  // Adds the given number to the result
  add(number) {
    this.#result += number; // Update result by adding the number
    return this.#result; // Return the updated result
  }

  // Subtracts the given number from the result
  subtract(number) {
    this.#result -= number; // Update result by subtracting the number
    return this.#result; // Return the updated result
  }

  // Multiplies the result by the given number
  multiply(number) {
    this.#result *= number; // Update result by multiplying with the number
    return this.#result; // Return the updated result
  }

  // Divides the result by the given number
  divide(number) {
    if (number === 0) {
      // Check for division by zero
      throw new Error("Division by zero is not allowed."); // Throw an error if division by zero
    }
    this.#result /= number; // Update result by dividing by the number
    return this.#result; // Return the updated result
  }

  // Resets the result to 0
  clear() {
    this.#result = 0; // Reset the result to 0
    return this.#result; // Return the reset result
  }

  // Returns the current value of the result
  getResult() {
    return this.#result; // Return the current result
  }

  // Evaluates the given arithmetic expression
  calculate(expression) {
    // Remove all spaces from the expression
    expression = expression.replace(/\s+/g, '');

    // Validate the expression for invalid characters
    if (/[^0-9+\-*/().]/.test(expression)) {
      throw new Error("Invalid characters in expression."); // Throw an error if invalid characters found
    }

    // Check for division by zero
    const zeroDivisionPattern = /\/0(?!\d)/;
    if (zeroDivisionPattern.test(expression)) {
      throw new Error("Division by zero is not allowed."); // Throw an error if division by zero is found
    }

    try {
      // Evaluate the expression using eval
      this.#result = eval(expression);
    } catch (e) {
      // Catch any errors during evaluation
      throw new Error("Invalid mathematical expression."); // Throw an error if the expression is invalid
    }

    return this.#result; // Return the evaluated result
  }
}

// Export the Calculator class as a module
module.exports = Calculator;