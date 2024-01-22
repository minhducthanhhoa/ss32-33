var users = [];

function createUser() {
  var id = prompt("Nhập ID:");
  var userName = prompt("Nhập tên:");
  var email = prompt("Nhập email:");
  var password = prompt("Nhập mật khẩu:");

  if (
    userName.length < 3 ||
    userName.trim() === "" ||
    email.trim() === "" ||
    !validateEmail(email) ||
    password.length < 8
  ) {
    console.log("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
    createUser(); 
  } else {
    var user = {
      id: id,
      user_name: userName,
      email: email,
      password: password
    };
    users.push(user);
    console.log("Đã thêm user vào mảng users.");
  }
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

createUser();