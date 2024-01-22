
var product = {
    id: 1,
    name: "Áo thun",
    price: 200000,
    quantity: 10
  };
  
  
  console.log("Thông tin sản phẩm:");
  for (var key in product) {
    console.log(key + ": " + product[key]);
  }