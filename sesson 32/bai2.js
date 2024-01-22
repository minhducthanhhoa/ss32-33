var information = {
    id: 123,
    name: "Minh Đức",
    phone: "123456789",
    address: "Thanh Hóa",
};

delete information.address;

information.email = "ngominhduc@gmail.com";

console.log("Thông tin các nhân:");
console.log("ID: ", information.id);
console.log("Tên: ", information.name);
console.log("Số điện thoại: ", information.phone);
console.log("Email: ", information.email);