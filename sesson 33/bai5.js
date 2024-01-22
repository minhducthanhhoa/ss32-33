var Book = function(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
  };
  
  Book.prototype.borrow = function() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log("Sách '" + this.title + "' đã được mượn.");
    } else {
      console.log("Sách '" + this.title + "' không khả dụng để mượn.");
    }
  };
  
  Book.prototype.returnBook = function() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log("Sách '" + this.title + "' đã được trả.");
    } else {
      console.log("Sách '" + this.title + "' không cần trả.");
    }
  };
  
  var Library = function() {
    this.books = [];
  };
  
  Library.prototype.addBook = function(book) {
    this.books.push(book);
  };
  
  Library.prototype.isBookAvailable = function(title) {
    for (var i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title) {
        return this.books[i].isAvailable;
      }
    }
    return false;
  };
  
  var library = new Library();
  
  var book1 = new Book("Sách 1", "Tác giả A", 2000);
  var book2 = new Book("Sách 2", "Tác giả B", 2010);
  var book3 = new Book("Sách 3", "Tác giả C", 2020);
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  book1.borrow();
  book2.borrow();
  book2.returnBook();
  
  console.log("Sách 'Sách 1' có sẵn để mượn: " + library.isBookAvailable("Sách 1"));
  console.log("Sách 'Sách 2' có sẵn để mượn: " + library.isBookAvailable("Sách 2"));