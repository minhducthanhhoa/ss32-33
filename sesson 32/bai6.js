var products = [
    { id: 1, name: "iPhone 12", price: 20000000 },
    { id: 2, name: "iPhone 11", price: 10000000 },
    { id: 3, name: "samsung note 10", price: 50000000 },
  ];
  
  function sortProductsByPriceAscending() {
    products.sort(function(a, b) {
      return a.price - b.price;
    });
  }
  
  sortProductsByPriceAscending();
  
  console.log("Danh sách products sau khi sắp xếp tăng dần theo giá:");
  for (var i = 0; i < products.length; i++) {
    console.log("ID: ", products[i].id);
    console.log("Tên sản phẩm: ", products[i].name);
    console.log("Giá: ", products[i].price);
  }