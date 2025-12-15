Yêu cầu:
1.Tạo hai đối tượng học viên (student1, student2)
Mỗi học viên cần có các thông tin sau:
id: số nguyên (number)
name: chuỗi (string)
email: chuỗi (string)
isPremium: true nếu học viên đăng ký gói cao cấp, false nếu thường
contact: có thể là email (string) hoặc số điện thoại (number) → dùng union type

2.Tạo một đối tượng khóa học (course) có thông tin:
courseId: số nguyên (number)
title: tên khóa học (string)
price: giá gốc (number)
students: danh sách học viên đã đăng ký → mảng object chứa học viên 


3.Viết hàm registerStudentToCourse(student, course)
Chức năng: Thêm học viên vào danh sách của khóa học.


4.Viết hàm printCourseInfo(course)
Chức năng:
In ra tên khóa học và số học viên đã đăng ký.
Nếu chưa có học viên → in "Chưa có học viên nào."
Nếu có học viên → liệt kê tên từng học viên.

//hàm main
Thực hiện yêu cầu 1 và yêu cầu 2. Sau đấy thực thi 2 function registerStudentToCourse và printCourseInfo để in ra thông tin