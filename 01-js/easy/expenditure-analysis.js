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
  const totalSpentBasedOnCategory = {};

  transactions.map((transaction) => {
    if (!totalSpentBasedOnCategory[transaction.category]) {
      totalSpentBasedOnCategory[transaction.category] = transaction.price;
    } else {
      totalSpentBasedOnCategory[transaction.category] += transaction.price;
    }
  });

  const expenditureByCategory = [];

  for (category in totalSpentBasedOnCategory) {
    let key = category;
    let calcutedExpenseofOneCat = {
      category: key,
      totalSpent: totalSpentBasedOnCategory[key],
    };
    expenditureByCategory.push(calcutedExpenseofOneCat);
  }

  return expenditureByCategory;
}

module.exports = calculateTotalSpentByCategory;
