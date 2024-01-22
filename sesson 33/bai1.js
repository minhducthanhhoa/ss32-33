var human = {
    name: "John",
    age: 30,
    address: "123 Main Street"
  };
  
  console.log("Tên: " + human.name);
  console.log("Tuổi: " + human.age);
  console.log("Địa chỉ: " + human.address);
  
  human.dateOfBirth = "01/01/1990";
  delete human.age;
  
  console.log("Sau khi thêm thuộc tính ngày sinh và xóa thuộc tính tuổi:");
  console.log(human);