"use strict";
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.up) {
        console.log(keyPressed);
    }
    else if (keyPressed == Direction.down) {
        console.log(keyPressed);
    }
    else if (keyPressed == Direction.left) {
        console.log(keyPressed);
    }
    else if (keyPressed == Direction.right) {
        console.log(keyPressed);
    }
    else {
        console.log("No Key Pressed so far");
    }
}
console.log(Direction.down);
console.log(Direction.right);
