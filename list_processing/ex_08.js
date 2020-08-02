function buyFruit(groceryList) {
  let result = [];
  
  groceryList.forEach((_, index) => {
    for (let repeat = groceryList[index][1]; repeat > 0; repeat -= 1) {
      result.push(groceryList[index][0]);
    }
  });
  
  return result;
}


buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"