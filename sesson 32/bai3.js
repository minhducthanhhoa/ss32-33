var numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:"));

var students = [];


for (var i = 0; i < numberOfStudents; i++) {
  var student = {};

  
  student.id = prompt("Nhập ID của sinh viên " + (i + 1) + ":");
  student.name = prompt("Nhập tên của sinh viên " + (i + 1) + ":");

  students.push(student);
}

console.log("Danh sách sinh viên:");
for (var i = 0; i < students.length; i++) {
  console.log("Sinh viên " + (i + 1) + ":");
  console.log("ID: " + students[i].id);
  console.log("Tên: " + students[i].name);
}