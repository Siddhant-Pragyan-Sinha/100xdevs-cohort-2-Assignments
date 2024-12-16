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
  const categoryTotals = {};

  transactions.forEach(function(transaction){
    let category = transaction.category;
    let price = transaction.price;
    if( categoryTotals[category]){
      categoryTotals[category] += price;
    }else{
      categoryTotals[category] = price;
    }
  });

  //convert the object to an array of objects
  const result = [];
  for(let category in categoryTotals){
    if( categoryTotals.hasOwnProperty(category)){
         result.push({category: category, totalSpent: categoryTotals[category]});
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
