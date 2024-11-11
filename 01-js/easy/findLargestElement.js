/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function findLargestElement(numbers) {
    let largest = numbers[0];
    // Initialize largest to the first element of the array
    numbers.forEach(element => {
        // Iterate through each element in the array
        if (element > largest) {
            largest = element;
        }
        // Update largest if the current element is greater
    });
    return largest;
}

module.exports = findLargestElement;