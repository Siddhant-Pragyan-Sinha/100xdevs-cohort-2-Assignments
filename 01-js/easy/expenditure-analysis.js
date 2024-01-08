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
  let output = {};
  for(let i =0; i < transactions.length; i++){
    const curr_category = transactions[i].category;
    const curr_price = transactions[i].price;

    if(!output[curr_category]){
      output[curr_category] = curr_price;
    } else{
      output[curr_category] += curr_price;
    }
  }
  const result = Object.keys(output).map((curr_category) => ({category:curr_category,totalSpent: output[curr_category]}));

  return result;
}

module.exports = calculateTotalSpentByCategory;
