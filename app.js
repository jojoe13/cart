const items = [
    { name: "Milk Bottle", price: 30, discountPercent: 10 },
    { name: "Cheese", price: 10, discountPercent: 0 },
    { name: "Packaged Meat (1kg)", price: 100, discountPercent: 5 },
    { name: "egg", price: 10, discountPercent: 0},
  ];
  function calculate() {
    var totalPrice = 0;
    var realPrice;
    for (let i = 0; i < items.length; i++) {
      realPrice = items[i].price * (1 - items[i].discountPercent / 100);
      totalPrice += realPrice;
    }
    return totalPrice;
  }
  
  console.log("The total price = "+calculate()+" USD");
  