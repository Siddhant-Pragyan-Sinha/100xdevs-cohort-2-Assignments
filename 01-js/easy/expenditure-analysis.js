/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const spendingByCategory = {};
  //  Initialized an empty object to keep track of total spending per category

  transactions.forEach(transaction => {
    //  Iterate through each transaction in the list
    //  The forEach method is used to iterate over each element in the transactions array. The transaction parameter represents the current transaction object in each iteration. This is an example of using an arrow function as the callback for forEach.
      const category = transaction.category;
      //  In this line, we access the category property of the current transaction object and assign its value to a constant named category. This allows us to refer to the category of the transaction within the rest of the block of code.
      const price = transaction.price;
      //  In this line accesses the price property of the current transaction object and assigns its value to a constant named price. This allows us to use the price of the transaction within the rest of the block of code.

      if (spendingByCategory[category]) {
          spendingByCategory[category] += price;
      } 
      //  If the category is already in the object, add the price to the existing total
      else {
          spendingByCategory[category] = price;
      }
      //  If the category is not in the object, add a new entry with the price
  });
  const result = Object.keys(spendingByCategory).map(category => ({
      //  Convert the object to an array of objects with the required format
      //  Object.keys(spendingByCategory) returns an array of the property names (keys) of the spendingByCategory object. These keys are the unique categories that have been processed from the transactions.
      //  The map method is called on the array of category keys. map creates a new array by applying a function to each element of the array. In this case, the function takes each category key and transforms it into a new object.
      category: category,
      totalSpent: spendingByCategory[category]
      //  category => ({ category: category, totalSpent: spendingByCategory[category] }) is an arrow function used to transform each category key into an object with two properties: category and totalSpent.
  }));
  return result;
  //  Return the resulting array
}

module.exports = calculateTotalSpentByCategory;
