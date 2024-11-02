function mathMethods(value) {
  console.log("Original Value:", value); 

  let rounded = Math.round(value);
  console.log("After round():", rounded);  // 5 9 25

  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);  //5

  let flooring = Math.floor(value);
  console.log("After floor():", flooring); //4

  let randomValue = Math.random();
  console.log("After random():", randomValue);  

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);  //15

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue); //5

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo); //4.56*4.56

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot); //2.135
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
