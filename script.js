//  total price of groceries

const getTotalPrice = (groceries) =>{
  let totalCost = groceries.map((item)=>{
    return Object.values(item).slice(-2).reduce((acc, num)=> acc * num);
  });
  return totalCost.reduce((acc, num) => acc + num);
}

let result = getTotalPrice([
    { product: "milk", quantity: 1, price: 1.5 },
    { product: "Apple", quantity: 1, price: 3.5 },

]);
console.log(result);