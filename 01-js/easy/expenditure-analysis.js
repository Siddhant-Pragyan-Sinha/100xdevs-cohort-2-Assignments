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
  let categoryMap = new Map();
  transactions.forEach(item => {
     if (categoryMap.has(item.category)){
       categoryMap.set(item.category, categoryMap.get(item.category)+item.price);
     } else {
       categoryMap.set(item.category, item.price);
     }
  });

  const result = [];
  categoryMap.forEach((totalSpent,category) => {
   result.push({"category" : category, "totalSpent" : totalSpent})
  });
  return result;
}



module.exports = calculateTotalSpentByCategory;
