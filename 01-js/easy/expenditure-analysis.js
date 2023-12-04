/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const mySpending={};
  for(var i=0;i<transactions.length;i++){
    if(mySpending[transactions[i].category]){
      mySpending[transactions[i].category]=mySpending[transactions[i].category]+transactions[i].price;
    }
    else{
      mySpending[transactions[i].category]=0;
      mySpending[transactions[i].category]=mySpending[transactions[i].category]+transactions[i].price;
    }
  }
  let answer=[];
  var keys=Object.keys(mySpending);
  for(var i=0;i<keys.length;i++){
    var obj={
      category : keys[i],
      totalSpent : mySpending[keys[i]]
    }
    answer.push(obj);
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
