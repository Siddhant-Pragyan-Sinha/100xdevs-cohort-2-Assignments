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
  constructor() {
    this.result = 0;
  }
  add(number) {
    this.result += number;
  }
  subtract(number) {
    this.result -= number;
  }
  multiply(number) {
    this.result *= number;
  }
  divide(number) {
    if (number == 0){
      throw new Error("Can't divide by zero");
    }
    this.result = this.result/number;
  }
  clear() {
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(expression) {
    const temp = expression;
    const cleanedExpression = temp.replace(/\s+/g, ''); // s+ matches one or more white spaces g is for matching global search replacing all occurence
    const validExpression = /^[0-9+\-*/().]+$/.test(cleanedExpression); //regular expression to check if it contains only valid character for mathematical expression
  
    if (!validExpression) {
        throw new Error("Invalid expression"); //throw error for expression like 5 + abc
    }
  
    try {
        this.result = eval(expression);
    } catch (err) {
        throw new Error("Invalid expression")
    }
    if (this.result === Infinity) {
      //when trying to divide by zero eval result in Infinity to throw error for divide by 0 adding this check here
        throw new Error("Cannot divide a number by 0")
    }
    return this.result;
  }

  
}


module.exports = Calculator;
