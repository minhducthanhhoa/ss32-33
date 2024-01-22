var Book = function(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  };
  
  Book.prototype.displayInfo = function() {
    console.log("Tiêu đề: " + this.title);
    console.log("Tác giả: " + this.author);
    console.log("Năm xuất bản: " + this.publishedYear);
    console.log("--------------------");
  };
  
  var Library = function() {
    this.books = [];
  };
  
  Library.prototype.addBook = function(book) {
    this.books.push(book);
  };
  
  Library.prototype.displayBooks = function() {
    for (var i = 0; i < this.books.length; i++) {
      this.books[i].displayInfo();
    }
  };
  
  var library = new Library();
  
  var book1 = new Book("Sách 1", "Tác giả A", 2000);
  var book2 = new Book("Sách 2", "Tác giả B", 2010);
  var book3 = new Book("Sách 3", "Tác giả C", 2020);
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  // Hiển thị danh sách đầy đủ thông tin sách trong thư viện
  library.displayBooks();