var phoneBook = {
    contacts: [
      {
        name: "John Doe",
        phone: "1234567890",
        email: "john.doe@example.com",
        displayInfo: function() {
          console.log("Tên: " + this.name);
          console.log("Số điện thoại: " + this.phone);
          console.log("Email: " + this.email);
          console.log("--------------------");
        }
      },
      {
        name: "Jane Smith",
        phone: "9876543210",
        email: "jane.smith@example.com",
        displayInfo: function() {
          console.log("Tên: " + this.name);
          console.log("Số điện thoại: " + this.phone);
          console.log("Email: " + this.email);
          console.log("--------------------");
        }
      },
      {
        name: "Mike Johnson",
        phone: "5555555555",
        email: "mike.johnson@example.com",
        displayInfo: function() {
          console.log("Tên: " + this.name);
          console.log("Số điện thoại: " + this.phone);
          console.log("Email: " + this.email);
          console.log("--------------------");
        }
      }
    ]
  };
  
  for (var i = 0; i < phoneBook.contacts.length; i++) {
    var contact = phoneBook.contacts[i];
    contact.displayInfo();
  }