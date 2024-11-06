// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values,
//  which might otherwise be represented as numbers or strings.
enum Direction {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.up) {
    console.log(keyPressed);
  } else if (keyPressed == Direction.down) {
    console.log(keyPressed);
  } else if (keyPressed == Direction.left) {
    console.log(keyPressed);
  } else if (keyPressed == Direction.right) {
    console.log(keyPressed);
  } else {
    console.log("No Key Pressed so far");
  }
}

console.log(Direction.down);
console.log(Direction.right);
