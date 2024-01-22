var phoneBook = {
    contacts: [
      {
        name: "John Doe",
        phone: "1234567890",
        email: "john.doe@example.com"
      },
      {
        name: "Jane Smith",
        phone: "9876543210",
        email: "jane.smith@example.com"
      },
      {
        name: "Mike Johnson",
        phone: "5555555555",
        email: "mike.johnson@example.com"
      }
    ]
  };
  
  for (var i = 0; i < phoneBook.contacts.length; i++) {
    var contact = phoneBook.contacts[i];
  
    console.log("Tên: " + contact.name);
    console.log("Số điện thoại: " + contact.phone);
    console.log("Email: " + contact.email);
    console.log("--------------------");
  }