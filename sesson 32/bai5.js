var books = [
    { author: "Nguyễn Nhật Ánh", name: "Mắt biếc" },
    { author: "Nguyễn Du", name: "Truyện Kiều" },
    { author: "Ngô Thành Long", name: "JavaScript: The Good Parts" },
    { author: "Harper Lee", name: "To Kill a Mockingbird" }
  ];
  
  var authorName = prompt("Nhập tên tác giả:");
  
  var foundBook = false;
  
  for (var i = 0; i < books.length; i++) {
    if (books[i].author === authorName) {
      console.log("Thông tin sách:");
      console.log("Tác giả: ", books[i].author);
      console.log("Tên sách: ", books[i].name);
      foundBook = true;
    }
  }
  
  
  if (!foundBook) {
    console.log("Không tìm thấy sách.");
  }