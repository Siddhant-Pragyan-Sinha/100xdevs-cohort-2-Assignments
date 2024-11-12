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
  //Initialize an empty object to keep track of totals by category
  const totalByCategory = [];

  //Iterate through the transaction
  transactions.forEach((element) => {
    const category = element.category;
    const price = element.price;

    //Update the total spent for the category
    if (totalByCategory[category]) {
      totalByCategory[category] += price;
    } else {
      totalByCategory[category] = price;
    }
  });
  //convert the totalByCategory object into the desired format
  const result = Object.keys(totalByCategory).map((category) => {
    return { category: category, totalSpent: totalByCategory[category] };
  });

  return result;
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 5,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: "Transport",
    itemName: "Bus Ticket",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: "Transport",
    itemName: "Bus Ticket",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: "Transport",
    itemName: "Bus Ticket",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 5,
    category: "Picnic",
    itemName: "Sky Island",
  },
];

console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
